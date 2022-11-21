import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type TAProps = {
  href: string;
  onClickEvent?: (e: React.SyntheticEvent) => void;
  children: React.ReactElement | string;
  className?: string;
};

export function Anchor({
  href,
  onClickEvent = () => null,
  children,
  className,
  ...others
}: TAProps) {
  return (
    <Link
      to={href}
      onClick={onClickEvent}
      className={twMerge("block w-full", className)}
      {...others}
    >
      {children}
    </Link>
  );
}
