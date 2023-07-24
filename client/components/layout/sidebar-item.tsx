import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { TSidebarItem } from "./sidebar.type";

interface TSidebarItemProps {
  onClick: (to: string) => void;
  path: string;
  item: TSidebarItem;
}

export const SidebarItem = ({ item, onClick, path }: TSidebarItemProps) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (item.items) {
      if (item.items.find((item) => item.to === path)) {
        setOpen(true);
      }
    }
  }, [item.items, path]);

  const handleClick = () => {
    setOpen(!open);
    if (item.to) onClick(item.to);
  };

  return (
    <>
      <ListItem
        key={item.label}
        dense
        disablePadding
      >
        <ListItemButton
          selected={item.to === path}
          onClick={handleClick}
        >
          <ListItemIcon sx={{ minWidth: "1.7rem" }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
          {item.items ? open ? <ExpandLess /> : <ExpandMore /> : ""}
        </ListItemButton>
      </ListItem>
      {item.items && (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{ paddingLeft: "1rem" }}
        >
          {item.items &&
            item.items.map((it) => (
              <SidebarItem
                item={it}
                key={it.label}
                onClick={onClick}
                path={path}
              />
            ))}
        </Collapse>
      )}
    </>
  );
};
