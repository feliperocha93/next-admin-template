import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';
import loading from '../../../public/loading.gif';
import useAuth from '../../data/hook/useAuth';

interface AuthComponentProps {

}

function renderContent(props) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: "if(!document.cookie?.includes('admin-template-cod3r-auth')) window.location.href = '/auth'"
          }}
        />
      </Head>
      {props.children}
    </>
  );
}
  
function renderIsLoading() {
  return (
    <div className={`
      flex justify-center items-center h-screen
    `}>
      <Image src={loading} />
    </div>
  );
}

function AuthComponent(props: AuthComponentProps) {
  const { user, isLoading } = useAuth();

  if(!isLoading && user?.email) {
    return renderContent(props);
  } else if (isLoading) {
    return renderIsLoading();
  } else {
    Router.push('/auth');
    return null;
  }

}

export default AuthComponent;
