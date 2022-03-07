import Title from "./Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

function Header({title, subtitle}: HeaderProps) {
  return (
    <div>
      <Title title={title} subtitle={subtitle} />
    </div>
  );
}

export default Header;
