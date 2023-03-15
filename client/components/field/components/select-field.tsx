import { useFormContext } from "react-hook-form";
import type { BaseFieldAttributes } from "./base-field.types";

export type TSelectFieldAttributes = BaseFieldAttributes & {
  type: "select";
  options: { label: string; value: string }[];
};

export function SelectField({ label, name, options }: TSelectFieldAttributes) {
  const { register } = useFormContext();

  return (
    <div>
      <label
        htmlFor={name}
        className={
          "block mb-0 text-sm font-medium text-gray-900 dark:text-white"
        }
      >
        {label}
      </label>
      <select
        {...register(name)}
        id={name}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
