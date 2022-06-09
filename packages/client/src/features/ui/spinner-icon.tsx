import React from "react";
import { Icon } from "@iconify/react";
import spinnerIos20Filled from "@iconify/icons-fluent/spinner-ios-20-filled";
import { twMerge } from "tailwind-merge";

interface SpinnerIconProps {
  show?: boolean;
  className?: string;
}

export default function SpinnerIcon({
  show = false,
  className,
}: SpinnerIconProps) {
  if (show !== true) return null;

  return (
    <Icon
      icon={spinnerIos20Filled}
      className={twMerge("animate-spin", className)}
    />
  );
}
