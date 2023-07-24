import React from "react";
import { SpinnerIcon } from "../spinner/spinner-icon";

type TPageTitleProps = {
  title: string;
  loading?: boolean;
  children?: React.ReactNode;
};

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
      className={
        "mb-2 inline-flex w-full flex-nowrap justify-between bg-gray-300"
      }
    >
      <div className={"inline-flex flex-nowrap"}>
        <p className={"ml-1 text-xl font-bold text-gray-700"}>{title}</p>
        <div className={"ml-1 mt-1"}>
          <SpinnerIcon
            show={loading}
            className={"h-5 w-5"}
          />
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}
