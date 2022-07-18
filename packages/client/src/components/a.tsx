import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface AProps {
  href: string;
  onClick?: () => void;
  children: React.ReactElement | string;
  className?: string;
}

export function A({ href, onClick, children, className, ...others }: AProps) {
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
