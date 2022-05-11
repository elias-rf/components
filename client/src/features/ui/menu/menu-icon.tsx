import React from "react";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify/icons-carbon/menu";
import closeIcon from "@iconify/icons-carbon/close";

interface MenuIconProps {
  opened: boolean;
}

export default function MenuIcon({ opened }: MenuIconProps) {
  return opened ? <Icon icon={closeIcon} /> : <Icon icon={menuIcon} />;
}
