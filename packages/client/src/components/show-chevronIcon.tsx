import chevronDown from "@iconify/icons-carbon/chevron-down";
import chevronRight from "@iconify/icons-carbon/chevron-right";
import { Icon } from "@iconify/react";

interface ShowChevronIconProps {
  opened: boolean;
}

export function ShowChevronIcon({ opened }: ShowChevronIconProps) {
  return opened ? <Icon icon={chevronDown} /> : <Icon icon={chevronRight} />;
}
