import { TMenuItemProps } from "./menu.types";

export function MenuItem({ to = "/", onClickEvent, children }: TMenuItemProps) {
  function handleOnClick() {
    onClickEvent({
      name: to,
      component: "MenuItem",
      event: "onClickEvent",
      value: to,
    });
  }

  return (
    <div
      className={
        "block px-2 py-1 text-sm text-gray-900 bg-gray-300 cursor-pointer hover:bg-gray-400 hover:text-gray-900 md:mt-0"
      }
    >
      <div onClick={handleOnClick}>{children}</div>
    </div>
  );
}
