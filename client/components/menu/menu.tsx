import { TMenuProps } from "./menu.types";

export function Menu({ children }: TMenuProps) {
  return (
    <div className="flex-col lg:flex lg:flex-row lg:min-h-screen">
      <div className="flex flex-col text-gray-100 bg-gray-700">{children}</div>
    </div>
  );
}
