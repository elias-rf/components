import { SidebarItemShortcut } from "./sidebar-item-shortcut";
import { TSidebarItem } from "./sidebar.types";

function SpaceIcon() {
  return (
    <svg
      aria-hidden="true"
      className={
        "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      }
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  );
}

export function SidebarItem({ children }: TSidebarItem) {
  const { icon = <SpaceIcon />, title = "", shortcut = "" } = children;
  return (
    <li>
      <a
        href="#"
        className={
          "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        }
      >
        {icon}
        <span className={"flex-1 ml-3 whitespace-nowrap"}>{title}</span>
        <SidebarItemShortcut>{shortcut}</SidebarItemShortcut>
      </a>
    </li>
  );
}
