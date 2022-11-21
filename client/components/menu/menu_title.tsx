import { useMenuStore } from "./menu.store";
import { TMenuTitleProps } from "./menu.types";
import { MenuIcon } from "./menu_icon";

export function MenuTitle({ to, children, onClickEvent }: TMenuTitleProps) {
  const show = useMenuStore((state) => state.show);
  const setShow = useMenuStore((state) => state.setShow);

  function handleOnClick() {
    onClickEvent({
      name: to,
      component: "MenuTitle",
      event: "onClickEvent",
      value: to,
    });
  }

  function handleShow() {
    setShow(!show);
  }

  return (
    <div className="flex flex-row items-center justify-between flex-shrink-0 px-10 py-2 text-2xl">
      <div className="w-full cursor-pointer">
        <div onClick={handleOnClick}>{children}</div>
      </div>
      <button
        type="button"
        aria-label={to}
        className="rounded-lg lg:hidden focus:outline-none"
        onClick={handleShow}
      >
        <MenuIcon opened={show} />
      </button>
    </div>
  );
}
