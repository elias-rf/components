import List from "@mui/material/List";
import { SidebarItem } from "./sidebar-item";
import { TSidebarItem } from "./sidebar.type";

interface TSidebarProps {
  onClick: (to: string) => void;
  path: string;
  menu: TSidebarItem[];
}

export const Sidebar = ({ menu, onClick, path }: TSidebarProps) => {
  return (
    <List
      dense
      disablePadding
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
    >
      {menu.map((item) => (
        <SidebarItem
          item={item}
          key={item.label}
          onClick={onClick}
          path={path}
        />
      ))}
    </List>
  );
};
