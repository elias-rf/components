export type TMenuItemProps = {
  to?: string;
  onClick: (e: React.MouseEvent) => void;
  children: string;
};

export function MenuItem({ to = "/", onClick, children }: TMenuItemProps) {
  function handleOnClick(e: React.MouseEvent) {
    onClick(e);
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
