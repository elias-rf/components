import { IEvent } from "../../../types";

interface SelectProps {
  field?: string;
  children: React.ReactNode;
  options?: any;
  value: string;
  onChange: (event: IEvent) => void;
  [prop: string]: any;
}

export function Select({
  field = "",
  children,
  onChange,
  options,
  value,
  ...others
}: SelectProps) {
  const handleOnChange = (event: any) => {
    onChange({
      name: field,
      value: event.target.value,
      event: "onChange",
      component: "Select",
    });
  };

  return (
    <select
      name={field}
      aria-label={field}
      value={value}
      onChange={handleOnChange}
      className="w-full h-6 px-1 text-gray-700 border border-gray-400 focus:border-gray-600"
      {...others}
    >
      {children}
    </select>
  );
}
