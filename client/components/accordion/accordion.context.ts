import React from "react";

export const AccordionContext = React.createContext<{
  active: string[];
  onClick: (event: React.MouseEvent<HTMLButtonElement>, name: string) => void;
}>({
  active: [],
  onClick: () => undefined,
});
