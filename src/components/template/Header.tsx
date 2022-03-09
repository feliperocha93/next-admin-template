import useAppData from "../../data/hook/useAppData";
import Avatar from "./Avatar";
import ChangeThemeButton from "./ChangeThemeButton";
import Title from "./Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

function Header({title, subtitle}: HeaderProps) {
  const { theme, changeTheme } = useAppData();

  return (
    <div className="flex">
      <Title title={title} subtitle={subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ChangeThemeButton theme={theme} changeTheme={changeTheme} />
        <Avatar className="ml-3"/>
      </div>
    </div>
  );
}

export default Header;
