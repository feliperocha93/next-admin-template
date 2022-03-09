import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconWarning } from "../components/icons";
import useAuth from "../data/hook/useAuth";

interface authProps {

}

function Auth(props: authProps) {
  const {signUp, login, loginGoogle} = useAuth();

  const [mode, setMode] = useState<'login' | 'sign'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function showError(msg, time = 5) {
    setError(msg);
    setTimeout(() => setError(null), time * 1000);
  }

  async function submit() {
    try {
      if(mode === 'login') {
        await login(email, password);
      } else {
        await signUp(email, password);
      }
    } catch (e) {
      setError(e?.message)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da tela de autenticação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-5">
          {mode === 'login' ? 'Login' : 'Sign up'}
        </h1>

        {error && (
          <div className={`
            flex items-center
            bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg
          `}>
            {IconWarning()}
            <span className="ml-3">{error}</span>
          </div>
        )}

        <AuthInput 
          label="Email"
          value={email}
          handleChange={setEmail}
          type='email'
        />
        <AuthInput 
          label="Password"
          value={password}
          handleChange={setPassword}
          type='password'
        />

        <button onClick={submit} className='w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6'>
          {mode === 'login' ? 'Login with email' : 'Sign up'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button onClick={loginGoogle} className='w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 mb-8'>
          {mode === 'login' ? 'Login with Google' : 'Sign up'}
        </button>

        {mode === 'login' ? (
          <p>
            New user?{' '}
            <a onClick={() => setMode('sign')} className={`
              text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
            `}>
               Create a free account   
            </a>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <a onClick={() => setMode('login')} className={`
              text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
            `}>
               Login with credentials   
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Auth;
