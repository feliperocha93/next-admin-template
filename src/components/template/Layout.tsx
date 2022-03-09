import { useEffect } from "react";
import useAppData from "../../data/hook/useAppData";
import AuthComponent from "../auth/AuthComponent";
import Content from "./Content";
import Header from "./Header";
import SideMenu from "./SideMenu";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

function Layout(props: LayoutProps) {
  const { theme } = useAppData();

  return (
    <AuthComponent>
      <div className={`${theme} flex h-screen w-screen`}>
        <SideMenu />
        <div className={`
          flex flex-col w-full p-7
          bg-gray-300 dark:bg-gray-800`
        }>
          <Header title={props.title} subtitle={props.subtitle} />
          <Content>
            {props.children}
          </Content>
        </div>
      </div>
    </AuthComponent>
  );
}

export default Layout;
