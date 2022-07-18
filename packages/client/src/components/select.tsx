import React from "react";
import { twMerge } from "tailwind-merge";

const Select = React.forwardRef(({ children, ...props }: any, ref) => {
  return (
    <select
      className={twMerge(
        "w-full h-6 px-1  text-gray-700 border border-gray-400 focus:border-gray-600",
        props.className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});

export { Select };
