import React from "react";

import Page403 from "../pages/page_403.js";

interface TCanProps {
  children: React.ReactNode;
  can?: boolean;
  elseCan?: unknown;
}

export function Can({ children, can, elseCan }: TCanProps) {
  if (can) return <>{children}</>;
  if (elseCan !== undefined) return <>{elseCan}</>;
  return <Page403 />;
}
