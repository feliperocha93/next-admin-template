import Link from "next/link";

interface SideMenuItemProps {
  text: string;
  icon: any;
  url?: string;
  className?: string;
  onClick?: (e: any) => void;
}

function SideMenuItem({url, text, icon, className, onClick}: SideMenuItemProps) {
  function renderContent() {
    return (
      <a className={`
        flex flex-col justify-center items-center
        h-20 w-20 text-gray-600" ${className}
      `}>
        {icon}
        <span className="text-xs font-light">{text}</span>
      </a>
    );
  }

  return (
    <li onClick={onClick} className={`
      hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer
    `}>
      {url ? (
        <Link href={url} passHref>
          {renderContent()}
        </Link>
      ) : renderContent()}
    </li>
  );
}

export default SideMenuItem;
