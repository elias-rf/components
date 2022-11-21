import React from "react";
import { SpinnerIcon } from "../spinner/spinner-icon";
import { TPageTitleProps } from "./page.types";

export function PageTitle({
  children,
  title,
  loading = false,
}: TPageTitleProps) {
  React.useEffect(() => {
    document.title = "Intranet VT - " + title;
  }, [title]);

  return (
    <section
      data-name={title}
      className="inline-flex justify-between w-full mb-2 bg-gray-300 flex-nowrap"
    >
      <div className="inline-flex flex-nowrap">
        <p className="ml-1 text-xl font-bold text-gray-700">{title}</p>
        <div className="mt-1 ml-1">
          <SpinnerIcon show={loading} className="w-5 h-5" />
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}
