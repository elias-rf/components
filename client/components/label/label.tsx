import { twMerge } from "tailwind-merge";

interface LabelProps {
  children: string;
  name: string;
  status: "success" | "error" | "";
}

export function Label(props: LabelProps) {
  const { children, name, status = "", ...other } = props;
  return (
    <label
      htmlFor={name}
      className={twMerge(
        "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        status === "success" ? "text-green-700 dark:text-green-500" : "",
        status === "error" ? "text-red-700 dark:text-red-500" : ""
      )}
      {...other}
    >
      {children}
    </label>
  );
}
