import useAppData from "../../data/hook/useAppData";
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
      <div className={`flex flex-grow justify-end`}>
        <ChangeThemeButton theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
}

export default Header;
