export type TSidebarItem = {
  label: string;
  to?: string;
  icon?: React.ReactNode;
  items?: TSidebarItem[];
};
