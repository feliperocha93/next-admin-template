import useAuth from "../../data/hook/useAuth";
import { IconBell, IconHome, IconLogout, IconSettings } from "../icons";
import Logo from "./Logo";
import SideMenuItem from "./SideMenuItem";

interface SideMenuProps {

}

function SideMenu(props: SideMenuProps) {
  const { logout } = useAuth();

  return (
    <aside className={`
      flex flex-col
      bg-gray-200 text-gray-700
      dark:bg-gray-900 dark:text-gray-200
    `}>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
      `}>
        <Logo />
      </div>

      <ul className="flex-grow">
        <SideMenuItem
          url="/"
          text="Home"
          icon={IconHome}
        />
        <SideMenuItem
          url="/settings"
          text="Settings"
          icon={IconSettings}
        />
        <SideMenuItem
          url="/notifications"
          text="Notification"
          icon={IconBell}
        />
      </ul>
      <ul>
        <SideMenuItem
          text="Logout"
          icon={IconLogout}
          onClick={logout}
          className={`
            text-red-600 darl:text-red-400
            hover:bg-red-400 hover:text-white
          `}
        />
      </ul>
    </aside>
  );
}

export default SideMenu;
