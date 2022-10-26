import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { useMenuStore } from "./menu.store";

interface MenuBodyProps {
  children: ReactElement | ReactElement[];
  version: string;
}

export function MenuBody({ children, version }: MenuBodyProps) {
  const show = useMenuStore((state) => state.show);
  console.log("**", show);

  return (
    <nav
      className={twMerge(
        "flex-grow lg:block lg:overflow-y-auto",
        "block"
        // 1 > 0 ? "block" : "hidden"
      )}
    >
      {children}
      {show}
      <div className="mt-4 text-xs text-center text-orange-300">
        Ver. {version}
      </div>
    </nav>
  );
}
