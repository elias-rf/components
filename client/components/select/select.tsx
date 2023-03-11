import { TSelectProps } from "./select.types";

export function Select({
  field = "",
  children,
  onChangeEvent,
  value,
  ...others
}: TSelectProps) {
  const handleOnChange = (event: any) => {
    onChangeEvent({
      name: field,
      value: event.target.value,
      event: "onChangeEvent",
      component: "Select",
    });
  };

  return (
    <select
      name={field}
      aria-label={field}
      value={value}
      onChange={handleOnChange}
      className={
        "w-full h-6 px-1 text-gray-700 border border-gray-400 focus:border-gray-600"
      }
      {...others}
    >
      {children}
    </select>
  );
}
