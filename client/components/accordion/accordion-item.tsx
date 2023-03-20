import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronIcon } from "../icons/chevron-icon";
import { AccordionContext } from "./accordion.context";

export type TAccordionItemProps = {
  name: string;
  title: string;
  children: ReactNode;
};

export function AccordionItem({ name, title, children }: TAccordionItemProps) {
  const ctx = React.useContext(AccordionContext);
  const show = ctx.active.includes(name);

  return (
    <>
      <button
        type="button"
        name={name}
        onClick={(e) => ctx.onClick(e, name)}
        className={twMerge(
          "flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800",
          show ? "border-b-0" : ""
        )}
      >
        <span>{title}</span>
        <ChevronIcon rotate={90} />
      </button>
      {show ? children : null}
    </>
  );
}
