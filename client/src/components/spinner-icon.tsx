import spinnerIos20Filled from "@iconify/icons-fluent/spinner-ios-20-filled";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

interface SpinnerIconProps {
  show?: boolean;
  className?: string;
}

export function SpinnerIcon({ show = false, className }: SpinnerIconProps) {
  if (show !== true) return null;

  return (
    <Icon
      icon={spinnerIos20Filled}
      className={twMerge("animate-spin", className)}
    />
  );
}
