import closeIcon from "@iconify/icons-carbon/close";
import { InlineIcon } from "@iconify/react";
import React from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  className?: string;
  labelClassName?: string;
  closeClassName?: string;
  children: string;
  name?: string;
  onClose?: (name?: string) => void;
  onClick?: (name?: string) => void;
}

/**
 * Componente Badge
 *
 * @param {{ className:string, labelClassName:string, closeClassName:string, children: JSX.Element, onClose: ()=>{}, onClick: ()=>{} }}  props
 * @returns {JSX.Element}
 */
export default function Badge({
  className,
  labelClassName,
  closeClassName,
  children,
  name,
  onClose,
  onClick,
}: BadgeProps) {
  function isClosable() {
    return onClose !== undefined;
  }
  function isClicable() {
    if (onClick !== undefined) return "cursor-pointer";
  }

  function handleClick() {
    if (onClick) onClick(name);
  }

  function handleClose() {
    if (onClose) onClose(name);
  }

  return (
    <div className="flex">
      <div
        className={twMerge(
          "h-6 flex justify-start border border-gray-400 rounded",
          isClicable(),
          className
        )}
      >
        <div
          className={twMerge(
            "px-2 py-1 text-xs bg-gray-200 rounded-l",
            labelClassName
          )}
          onClick={handleClick}
        >
          {children} {isClosable()}
        </div>
        {isClosable() ? (
          <InlineIcon
            icon={closeIcon}
            className={twMerge("self-center", closeClassName)}
            onClick={handleClose}
          />
        ) : null}
      </div>
    </div>
  );
}
