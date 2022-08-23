import { IEvent } from "@er/types";
import closeIcon from "@iconify/icons-carbon/close";
import { InlineIcon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

type TBadgeProps = {
  className?: string;
  labelClassName?: string;
  closeClassName?: string;
  isClosable?: boolean;
  isClicable?: boolean;
  children: string;
  name?: string;
  onClick?: (e: IEvent) => void;
  onClose?: (e: IEvent) => void;
};

/**
 * Componente Badge
 */
export function Badge(props: TBadgeProps) {
  const {
    className,
    labelClassName,
    closeClassName,
    children,
    isClosable = false,
    isClicable = true,
    name = "",
    onClick = () => null,
    onClose = () => null,
  } = props;

  function handleClick(e: React.SyntheticEvent) {
    if (isClicable) {
      onClick({
        name,
        value: children,
        targetProps: props,
        targetName: "Badge",
        eventName: "click",
        event: e,
      });
    }
  }

  function handleClose(e: React.SyntheticEvent) {
    onClose({
      name,
      value: children,
      targetProps: props,
      targetName: "Badge",
      eventName: "close",
      event: e,
    });
  }

  return (
    <div className="flex">
      <div
        className={twMerge(
          "h-6 flex justify-start border border-gray-400 rounded",
          isClicable ? "cursor-pointer" : "",
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
          {children}
        </div>
        {isClosable ? (
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
