import { TSidebarItemShortcut } from "./sidebar.types";

export function SidebarItemShortcut({ children }: TSidebarItemShortcut) {
  if (typeof children === "string") {
    return (
      <span
        className={
          "inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
        }
      >
        {children}
      </span>
    );
  }
  return children;
}
