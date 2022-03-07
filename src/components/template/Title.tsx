interface TitleProps {
  title: string;
  subtitle: string;
}

function Title({title, subtitle}: TitleProps) {
  return (
    <div>
      <h1 className={``}>{title}</h1>

      <h2 className={``}>{subtitle}</h2>
    </div>
  );
}

export default Title;
