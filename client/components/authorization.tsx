import React from "react";

import Page403 from "../pages/page_403";

interface AuthorizationProps {
  children: React.ReactNode;
  can?: boolean;
}

export function Authorization({ children, can }: AuthorizationProps) {
  if (can) return <>{children}</>;
  return <Page403 />;
}
