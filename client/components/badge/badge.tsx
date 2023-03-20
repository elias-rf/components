// https://flowbite.com/docs/components/badge/
import { twMerge } from "tailwind-merge";
import { BadgeClose } from "./badge-close";

export type TBadgeProps = {
  color?:
    | "default"
    | "dark"
    | "red"
    | "green"
    | "yellow"
    | "indigo"
    | "purple"
    | "pink";
  large?: boolean;
  children: string;
  name?: string;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>, name: string) => void;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>, name: string) => void;
  className?: string;
};

const classColor = {
  default: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800",
  dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900",
  green: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900",
  yellow:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900",
  indigo:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900",
  purple:
    "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900",
  pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900",
};

/**
 * Componente Badge
 */
export function Badge({
  children,
  color = "default",
  name = "",
  className = "",
  large,
  onClick,
  onClose,
}: TBadgeProps) {
  function handleClick(e: React.MouseEvent<HTMLSpanElement>) {
    if (onClick) {
      onClick(e, name);
    }
  }

  return (
    <span
      onClick={handleClick}
      className={twMerge(
        "text-xs font-semibold mr-2 pl-2.5 py-0.5 rounded inline-flex items-center justify-between",
        classColor[color],
        onClick !== undefined ? "cursor-pointer" : "",
        onClose !== undefined ? "" : "pr-2.5",
        large ? "text-sm font-medium" : "",
        className
      )}
      data-testid="badge-span"
    >
      {children}
      <BadgeClose
        name={name}
        onClose={(e) => (onClose ? onClose(e, name) : null)}
      />
    </span>
  );
}
