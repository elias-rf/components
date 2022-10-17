export const menuItemActionTypes = { navigate: "NAVIGATE" };

export type MenuItemAction = {
  type: typeof menuItemActionTypes.navigate;
  payload: { to: string };
};

interface MenuItemProps {
  to?: string;
  dispatch: (action: MenuItemAction) => void;
  children: string;
}

export function MenuItem({ to = "/", dispatch, children }: MenuItemProps) {
  function handleDispatch() {
    dispatch({ type: menuItemActionTypes.navigate, payload: { to } });
  }
  return (
    <div className="block px-2 py-1 text-sm text-gray-900 bg-gray-300 cursor-pointer hover:bg-gray-400 hover:text-gray-900 md:mt-0">
      <div onClick={handleDispatch}>{children}</div>
    </div>
  );
}
