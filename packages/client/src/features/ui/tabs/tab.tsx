import React from "react";
import { twMerge } from "tailwind-merge";

export interface TabProps {
  active?: string;
  id: string;
  title: string;
  onChange?: (id: string) => void;
  children: React.ReactNode;
}

function Tab({ active, id, title, onChange }: TabProps) {
  const handleOnChange = () => {
    if (onChange) {
      onChange(id);
    }
  };

  return (
    <li
      className={twMerge(
        "py-1 px-4 border-gray-300 border-solid border-t border-l border-r rounded-t-lg",
        active === id ? "bg-white -mb-px" : "text-gray-500 bg-gray-200"
      )}
      key={id}
      onClick={handleOnChange}
    >
      {title}
    </li>
  );
}

export default Tab;
