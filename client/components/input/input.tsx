import { TInputProps } from "./input.types";

export function Input(props: TInputProps) {
  const { name, disabled, status = "", onChangeEvent, ...others } = props;
  function handleChange(e: any): void {
    onChangeEvent({
      name,
      component: "Input",
      event: "onChangeEvent",
      value: e.target.value,
    });
  }
  return (
    <input
      className={[
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm",
        "focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
        status === "success"
          ? "bg-green-50 border-green-500 text-green-900  placeholder-green-700  focus:ring-green-500 focus:border-green-500"
          : false,
        status === "error"
          ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
          : false,
        disabled ? "bg-gray-100 cursor-not-allowed" : false,
      ]}
      name={name}
      id={name}
      lang={navigator.language}
      disabled={disabled}
      onChange={handleChange}
      {...others}
    />
  );
}
