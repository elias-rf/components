// https://flowbite.com/docs/components/badge/
import { twMerge } from "tailwind-merge";
import { IEvent } from "../../../types";

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
  onClick?: (e: IEvent) => void;
  onClose?: (e: IEvent) => void;
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

function CloseButton(props: { name: string; onClose?: (e: IEvent) => void }) {
  const { onClose, name } = props;

  function handleClose(e: React.SyntheticEvent) {
    e.stopPropagation();
    if (onClose) {
      onClose({
        name,
        targetName: "Badge",
        eventName: "close",
      });
    }
  }

  if (onClose === undefined) return null;

  return (
    <button
      type="button"
      onClick={handleClose}
      className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900"
      data-dismiss-target="#badge-dismiss-default"
      aria-label="Remove"
    >
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
      </svg>
      <span className="sr-only">Remove badge</span>
    </button>
  );
}

/**
 * Componente Badge
 */
export function Badge(props: TBadgeProps) {
  const {
    children,
    color = "default",
    name = "",
    large,
    onClick,
    onClose,
  } = props;

  function handleClick() {
    if (onClick) {
      onClick({
        name,
        targetName: "Badge",
        eventName: "click",
      });
    }
  }

  return (
    <span
      onClick={handleClick}
      className={twMerge(
        "text-xs font-semibold mr-2 pl-2.5 py-0.5 rounded inline-flex items-center",
        classColor[color],
        onClick !== undefined ? "cursor-pointer" : "",
        onClose !== undefined ? "" : "pr-2.5",
        large ? "text-sm font-medium" : ""
      )}
    >
      {children}
      <CloseButton name={name} onClose={onClose} />
    </span>
  );
}
