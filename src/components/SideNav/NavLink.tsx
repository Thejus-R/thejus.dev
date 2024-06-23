import Image from "next/image";

export type NavLinkProps = {
  name: string;
  icon: string;
  isActive: boolean;
};

export default function NavLink(props: NavLinkProps) {
  return (
    <div
      className={`${
        props.isActive
          ? "bg-gray-900 hover:bg-gray-800 text-white"
          : "bg-white hover:bg-gray-100 text-gray-900 outline outline-1 outline-gray-200"
      } h-12 rounded-2xl flex gap-2 transition-colors duration-300 items-center p-4`}
    >
      <Image
        src={`/icons/${props.icon}-${props.isActive ? "fill" : "bold"}.svg`}
        alt={props.name}
        width={20}
        height={20}
      />
      {props.name}
    </div>
  );
}
