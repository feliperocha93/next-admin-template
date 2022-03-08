interface ContentProps {
  children?: any;
}

function Content(props: ContentProps) {
  return (
    <div className={`
      flex fle-col mt-7
      dark:text-gray-200
    `}>
      {props.children}
    </div>
  );
}

export default Content;
