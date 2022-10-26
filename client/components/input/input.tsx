import { twMerge } from "tailwind-merge";
import { IEvent } from "../../../types";

export type TInputProps = {
  name: string;
  disabled: boolean;
  status: "success" | "error" | "";
  value: string;
  onChange: (event: IEvent) => void;
};

export function Input(props: TInputProps) {
  const { name, disabled, status = "", onChange, ...others } = props;
  function handleChange(e: any): void {
    console.log(e.target.value);
    onChange({
      name,
      component: "Input",
      event: "onChange",
      value: e.target.value,
    });
  }
  return (
    <input
      className={twMerge(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        status === "success"
          ? "bg-green-50 border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500 dark:border-green-500"
          : "",
        status === "error"
          ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
          : "",
        disabled ? "bg-gray-100 cursor-not-allowed dark:text-gray-400" : ""
      )}
      name={name}
      id={name}
      lang={navigator.language}
      disabled={disabled}
      onChange={handleChange}
      {...others}
    />
  );
}
