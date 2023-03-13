import { ChevronIcon } from "./icons/chevron-icon";
interface ShowChevronIconProps {
  opened: boolean;
}

export function ShowChevronIcon({ opened }: ShowChevronIconProps) {
  return opened ? <ChevronIcon rotate={90} /> : <ChevronIcon rotate={0} />;
}
