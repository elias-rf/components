import { twMerge } from "tailwind-merge";
import { TButtonProps } from "./button.types";

const buttonTheme = {
  default:
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
  alternative:
    "text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
  dark: "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
  light:
    "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
  green:
    "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
  red: "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
  yellow:
    "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900",
  purple:
    "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
};

const buttonThemeDisabled = {
  default: "bg-blue-400 dark:bg-blue-500",
  alternative: "text-gray-400 dark:bg-gray-700",
  dark: "bg-gray-500 dark:bg-gray-700",
  light: "text-gray-400 dark:bg-gray-700",
  green: "bg-green-400 hover:bg-green-800 dark:bg-green-500",
  red: "bg-red-400 hover:bg-red-800 dark:bg-red-500",
  yellow: "bg-yellow-300 dark:bg-yellow-500",
  purple: "bg-purple-400 dark:bg-purple-500",
};

const buttonSize = {
  xs: "text-xs py-2 px-3",
  sm: "text-sm py-2 px-3",
  bs: "text-sm px-5 py-2.5",
  lg: "text-base py-3 px-5",
  xl: "text-base px-6 py-3.5",
};

/**
 * Component Button
 */
export function Button({
  className,
  children,
  disabled = false,
  color = "default",
  size = "bs",
  onClickEvent = () => null,
  name = "",
}: TButtonProps) {
  function handleClick() {
    onClickEvent({
      name,
      value: children,
      component: "Button",
      event: "onClickEvent",
    });
  }

  return (
    <button
      className={twMerge(
        "focus:ring-4 font-medium rounded-lg text-center",
        buttonSize[size],
        buttonTheme[color],
        disabled ? `cursor-not-allowed opacity-50` : "",
        className
      )}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
