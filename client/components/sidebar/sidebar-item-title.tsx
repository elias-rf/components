export type TSidebarItemTitle = {
  children: any;
};

export function SidebarItemTitle({ children }: TSidebarItemTitle) {
  if (typeof children === "string") {
    return <span className="flex-1 ml-3 whitespace-nowrap">{children}</span>;
  }
  return children;
}