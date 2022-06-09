import React from "react";
import A from "../a";

interface MenuItemProps {
  href?: string;
  onClick?: () => void;
  children: string;
}

export default function MenuItem({
  href = "/",
  onClick,
  children,
}: MenuItemProps) {
  return (
    <div className="block px-2 py-1 text-sm text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900 md:mt-0">
      <A href={href} onClick={onClick}>
        {children}
      </A>
    </div>
  );
}
