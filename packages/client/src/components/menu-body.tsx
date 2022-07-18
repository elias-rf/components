import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface MenuBodyProps {
  children: ReactElement | ReactElement[];
  version: string;
  show?: boolean;
}

// "flex-grow lg:block lg:overflow-y-auto" | show?"block" : "hidden";

export function MenuBody({ children, show, version }: MenuBodyProps) {
  return (
    <nav
      className={twMerge(
        "flex-grow lg:block lg:overflow-y-auto",
        show ? "block" : "hidden"
      )}
    >
      {children}
      <div className="mt-4 text-xs text-center text-orange-300">
        Ver. {version}
      </div>
    </nav>
  );
}
