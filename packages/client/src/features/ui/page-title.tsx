import React from "react";
import SpinnerIcon from "./spinner-icon";

interface PageTitleProps {
  title: string;
  loading?: boolean;
  children?: React.ReactNode;
}

export default function PageTitle({
  children,
  title,
  loading = false,
}: PageTitleProps) {
  React.useEffect(() => {
    document.title = "Intranet VT - " + title;
  }, [title]);

  return (
    <div className="inline-flex justify-between w-full flex-nowrap">
      <div className="inline-flex flex-nowrap">
        <p className="text-xl font-bold text-gray-500">{title}</p>
        <div className="mt-1 ml-1">
          <SpinnerIcon
            show={loading}
            className="w-5 h-5"
          />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
