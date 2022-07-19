import closeIcon from "@iconify/icons-carbon/close";
import { InlineIcon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

export const badgeActionTypes = { click: "CLICK", close: "CLOSE" };

export type BadgeAction =
  | {
      type: typeof badgeActionTypes.click;
      payload: { name: string };
    }
  | {
      type: typeof badgeActionTypes.close;
      payload: { name: string };
    };

type BadgeProps = {
  className?: string;
  labelClassName?: string;
  closeClassName?: string;
  isClosable?: boolean;
  isClicable?: boolean;
  children: string;
  name?: string;
  dispatch?: (action: BadgeAction) => void;
  onClick?: (name: string) => void;
  onClose?: (name: string) => void;
};

/**
 * Componente Badge
 */
export function Badge({
  className,
  labelClassName,
  closeClassName,
  children,
  isClosable = false,
  isClicable = true,
  name = "",
  dispatch = () => {},
  onClick = () => {},
  onClose = () => {},
}: BadgeProps) {
  function handleClick() {
    if (isClicable) {
      dispatch({ type: badgeActionTypes.click, payload: { name } });
      onClick(name);
    }
  }

  function handleClose() {
    dispatch({ type: badgeActionTypes.close, payload: { name } });
    onClose(name);
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
