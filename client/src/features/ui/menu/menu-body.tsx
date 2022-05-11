import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface MenuBodyProps {
  children: ReactElement | ReactElement[];
  show?: boolean;
}

export default function MenuBody({ children, show }: MenuBodyProps) {
  return (
    <nav
      className={twMerge(
        "flex-grow lg:block lg:overflow-y-auto",
        show ? "block" : "hidden"
      )}
    >
      {children}
      <div className="mt-4 text-xs text-center text-orange-300">
        Ver. {APP_VERSION}
      </div>
    </nav>
  );
}
