import Content from "./Content";
import Header from "./Header";
import SideMenu from "./SideMenu";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

function Layout(props: LayoutProps) {
  return (
    <div>
      <Header title={props.title} subtitle={props.subtitle} />
      <SideMenu />
      <Content>
        {props.children}
      </Content>
    </div>
  );
}

export default Layout;
