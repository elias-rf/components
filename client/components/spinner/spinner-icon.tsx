import spinnerIos20Filled from "@iconify/icons-fluent/spinner-ios-20-filled";
import { Icon } from "@iconify/react";

interface SpinnerIconProps {
  show?: boolean;
  className?: string;
}

export function SpinnerIcon({ show = false, className }: SpinnerIconProps) {
  if (show !== true) return null;

  return (
    <Icon
      inline={true}
      icon={spinnerIos20Filled}
      className={("animate-spin", className)}
    />
  );
}
