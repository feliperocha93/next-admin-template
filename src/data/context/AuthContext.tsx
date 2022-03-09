import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import firebase  from "../../firebase/config";
import User from "../../model/User";
import Cookies from 'js-cookie';

interface AuthContextProps {
  user?: User;
  isLoading?: boolean;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  loginGoogle: () => Promise<void>;
  logout: () => Promise<void>;  
}

async function serializeUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken();
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0].providerId,
    imageUrl: firebaseUser.photoURL,
  }
}

const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  loginGoogle: undefined,
  logout: undefined,
  login: undefined,
  signUp: undefined
});

function handleCookie(isLogged: boolean) {
  if(isLogged) {
    Cookies.set('admin-template-cod3r-auth', String(isLogged), {
      expires: 7
    });
  } else {
    Cookies.remove('admin-template-cod3r-auth');
  }
}

export function AuthProvider(props: any) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>(null);

  async function configSession(user) {
    if (user?.email) {
      const serializedUser = await serializeUser(user);
      setUser(serializedUser)
      handleCookie(true);
      setIsLoading(false);
      return user.email;
    } else {
      setUser(null);
      handleCookie(false);
      setIsLoading(false);
      return false;
    }
  }

  async function signUp(email: string, password: string) {
    try {
      setIsLoading(true);
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
      await configSession(response.user)
      router.push('/');
    } finally {
      setIsLoading(false);
    }
  }

  async function login(email: string, password: string) {
    try {
      setIsLoading(true);
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
  
      await configSession(response.user)
      router.push('/');
    } finally {
      setIsLoading(false);
    }
  }

  async function loginGoogle() {
    const response = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );

    await configSession(response.user)
    router.push('/');
  }

  async function logout() {
    try {
      setIsLoading(true);
      await firebase.auth().signOut();
      await configSession(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-cod3r-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(configSession);
      return () => cancel();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      loginGoogle,
      logout,
      isLoading,
      login,
      signUp
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;