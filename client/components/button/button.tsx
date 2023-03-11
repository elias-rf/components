import { TEvent } from "../../../types";
//https://flowbite.com/docs/components/buttons/
export type TButtonEvent = TEvent & {
  component: "Button";
  event: "onClickEvent";
};

export type TButtonProps = {
  children: React.ReactNode;
  color?:
    | "default"
    | "alternative"
    | "dark"
    | "light"
    | "green"
    | "red"
    | "yellow"
    | "purple";
  disabled?: boolean;
  size?: "extraSmall" | "small" | "base" | "large" | "extraLarge";
  name?: string;
  className?: string;
  onClickEvent?: (event: TButtonEvent) => void;
  "data-testid"?: string;
};

const commonTheme =
  "text-center text-white focus:ring-4 font-medium rounded-lg focus:outline-none ";

const buttonTheme = {
  default:
    "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  alternative:
    "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
  dark: "bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
  light:
    "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
  green:
    "bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
  red: "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
  yellow:
    "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900",
  purple:
    "bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
};

const buttonSize = {
  extraSmall: "px-2 py-1.5 text-xs",
  small: "px-3 py-2 text-sm",
  base: "px-3 py-2.5 text-sm",
  large: "px-4 py-3 text-base",
  extraLarge: "px-6 py-3.5 text-lg",
};

/**
 * Component Button
 */
export function Button({
  className,
  children,
  disabled = false,
  color = "default",
  size = "base",
  onClickEvent = () => null,
  name = "",
  "data-testid": dataTestid,
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
      className={
        (commonTheme,
        buttonSize[size],
        buttonTheme[color],
        disabled ? `cursor-not-allowed opacity-50` : "",
        className)
      }
      disabled={disabled}
      onClick={handleClick}
      data-testid={dataTestid || "button"}
    >
      {children}
    </button>
  );
}
