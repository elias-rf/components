import { twMerge } from "tailwind-merge";

export function Select({ children, ...props }: any) {
  return (
    <select
      className={twMerge(
        "w-full h-6 px-1  text-gray-700 border border-gray-400 focus:border-gray-600",
        props.className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
