import React from "react";

export const TabsContext = React.createContext<{
  active: string;
  onChange: (event: any) => void;
}>({
  active: "",
  onChange: () => undefined,
});
