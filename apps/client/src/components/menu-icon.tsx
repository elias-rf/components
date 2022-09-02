import closeIcon from "@iconify/icons-carbon/close";
import menuIcon from "@iconify/icons-carbon/menu";
import { Icon } from "@iconify/react";

interface MenuIconProps {
  opened: boolean;
}

export function MenuIcon({ opened }: MenuIconProps) {
  return opened ? <Icon icon={closeIcon} /> : <Icon icon={menuIcon} />;
}
