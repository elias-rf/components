import { TLabelProps } from "./form.types";

export function Label(props: TLabelProps) {
  const { children, name, status = "", className } = props;
  return (
    <label
      htmlFor={name}
      className={
        ("block text-sm font-medium text-gray-900 dark:text-gray-300",
        status === "success" ? "text-green-700 dark:text-green-500" : "",
        status === "error" ? "text-red-700 dark:text-red-500" : "",
        className)
      }
    >
      {children}
    </label>
  );
}
