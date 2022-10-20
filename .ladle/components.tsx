import "../client/index.css";

import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = ({ children }: { children: any }) => (
  <div
    className={document
      .querySelector("[data-theme]")
      .getAttribute("data-theme")}
  >
    {children}
  </div>
);
