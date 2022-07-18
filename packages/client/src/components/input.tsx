import React from "react";
import { twMerge } from "tailwind-merge";

const Input = React.forwardRef((props: any, ref) => {
  return (
    <input
      className={twMerge(
        "w-full h-6 px-2 py-1 text-gray-700 border border-gray-400 focus:border-gray-600",
        props.className
      )}
      lang={navigator.language}
      ref={ref}
      {...props}
    />
  );
});

export { Input };
