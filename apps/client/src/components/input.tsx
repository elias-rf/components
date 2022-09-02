import { twMerge } from "tailwind-merge";

export function Input(props: any) {
  return (
    <input
      className={twMerge(
        "w-full h-6 px-2 py-1 text-gray-700 border border-gray-400 focus:border-gray-600",
        props.className
      )}
      lang={navigator.language}
      {...props}
    />
  );
}
