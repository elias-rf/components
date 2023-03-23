import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import type { BaseFieldAttributes } from "./base-field.types";
export type TTextFieldAttributes = BaseFieldAttributes & {
  type: "text";
};

export function TextField({
  label,
  name,
  type,
  disabled,
  classNameField,
}: TTextFieldAttributes) {
  const { register } = useFormContext();
  return (
    <div className={"my-2"}>
      <label
        htmlFor={name}
        className={
          "block mb-0 text-sm font-medium text-gray-900 dark:text-white"
        }
      >
        {label}
      </label>
      <input
        {...register(name)}
        name={name}
        id={name}
        type={type}
        className={twMerge(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          classNameField
        )}
        disabled={disabled}
      />
    </div>
  );
}
