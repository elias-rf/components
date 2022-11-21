import closeIcon from "@iconify/icons-carbon/close";
import menuIcon from "@iconify/icons-carbon/menu";
import { Icon } from "@iconify/react";
import { TMenuIconProps } from "./menu.types";

export function MenuIcon({ opened }: TMenuIconProps) {
  return opened ? <Icon icon={closeIcon} /> : <Icon icon={menuIcon} />;
}
