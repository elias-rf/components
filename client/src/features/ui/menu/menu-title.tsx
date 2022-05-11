import React from "react";
import A from "../a";
import MenuIcon from "./menu-icon";

interface MenuTitleProps {
  href: string;
  show?: boolean;
  setShow?: (show: boolean) => void;
  children: string | React.ReactElement;
}

export default function MenuTitle({
  href,
  children,
  show,
  setShow,
}: MenuTitleProps) {
  return (
    <div className="flex flex-row items-center justify-between flex-shrink-0 px-10 py-2 text-2xl">
      <div className="w-full">
        <A href={href}>{children}</A>
      </div>
      <button
        type="button"
        aria-label={href}
        className="rounded-lg lg:hidden focus:outline-none"
        onClick={() => {
          if (setShow) setShow(!show);
        }}
      >
        <MenuIcon opened={show !== false} />
      </button>
    </div>
  );
}
