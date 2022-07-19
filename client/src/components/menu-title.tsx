import React from "react";
import { MenuIcon } from "./menu-icon";

export const menuTitleActionTypes = { navigate: "NAVIGATE" };

export type MenuTitleAction = {
  type: typeof menuTitleActionTypes.navigate;
  payload: { to: string };
};

interface MenuTitleProps {
  to: string;
  show?: boolean;
  setShow?: (show: boolean) => void;
  dispatch: (action: MenuTitleAction) => void;

  children: string | React.ReactElement;
}

export function MenuTitle({
  to,
  children,
  show,
  setShow,
  dispatch,
}: MenuTitleProps) {
  function handleDispatch() {
    dispatch({ type: menuTitleActionTypes.navigate, payload: { to } });
  }
  return (
    <div className="flex flex-row items-center justify-between flex-shrink-0 px-10 py-2 text-2xl">
      <div className="w-full cursor-pointer">
        <div onClick={handleDispatch}>{children}</div>
      </div>
      <button
        type="button"
        aria-label={to}
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
