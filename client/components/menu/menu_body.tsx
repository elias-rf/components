import { twMerge } from "tailwind-merge";
import { useMenuStore } from "./menu.store";
import { TMenuBodyProps } from "./menu.types";

export function MenuBody({ children, version }: TMenuBodyProps) {
  const show = useMenuStore((state) => state.show);

  return (
    <nav
      className={twMerge(
        "flex-grow lg:block lg:overflow-y-auto",
        show ? "block" : "hidden"
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
