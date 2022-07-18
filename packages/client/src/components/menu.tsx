import React, { useState } from "react";
import { MenuProvider } from "./menu.context";

interface MenuProps {
  children: React.ReactElement | React.ReactElement[];
}

export function Menu({ children }: MenuProps) {
  const [show, setShow] = useState(false);

  return (
    <MenuProvider>
      <div className="flex-col lg:flex lg:flex-row lg:min-h-screen">
        <div className="flex flex-col text-gray-100 bg-gray-700">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              show,
              setShow,
            });
          })}
        </div>
      </div>
    </MenuProvider>
  );
}
