import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface AvatarProps {
  className?: string;
}

function Avatar(props: AvatarProps) {
  const { user } = useAuth();

  return (
    <Link href='/perfil'>
      <img
        src={user?.imageUrl ?? '/avatar.svg'}
        alt="User avatar"
        className={`
          ${props.className} h-10 w-10 rounded-full cursor-pointer
        `}
      />
    </Link>
  );
}

export default Avatar;
