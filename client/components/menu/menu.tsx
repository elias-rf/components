import React from "react";

type MenuProps = {
  children: React.ReactElement | React.ReactElement[];
};

export function Menu({ children }: MenuProps) {
  return (
    <div className="flex-col lg:flex lg:flex-row lg:min-h-screen">
      <div className="flex flex-col text-gray-100 bg-gray-700">{children}</div>
    </div>
  );
}
