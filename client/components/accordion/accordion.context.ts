import React from "react";

export const AccordionContext = React.createContext<{
  active: string[];
  onClick: (event: any) => void;
}>({
  active: [],
  onClick: () => undefined,
});
