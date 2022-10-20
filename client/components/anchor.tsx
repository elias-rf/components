import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type TAProps = {
  href: string;
  onClick?: (e: React.SyntheticEvent) => void;
  children: React.ReactElement | string;
  className?: string;
};

export function Anchor({
  href,
  onClick = () => null,
  children,
  className,
  ...others
}: TAProps) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={twMerge("block w-full", className)}
      {...others}
    >
      {children}
    </Link>
  );
}
