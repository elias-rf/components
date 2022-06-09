import React from "react";
import { Icon } from "@iconify/react";
import chevronDown from "@iconify/icons-carbon/chevron-down";
import chevronRight from "@iconify/icons-carbon/chevron-right";

interface ShowChevronIconProps {
  opened: boolean;
}

export default function ShowChevronIcon({ opened }: ShowChevronIconProps) {
  return opened ? <Icon icon={chevronDown} /> : <Icon icon={chevronRight} />;
}
