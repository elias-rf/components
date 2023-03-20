import React from "react";

export const TabsContext = React.createContext<{
  active: string;
  onChange: (event: React.MouseEvent<HTMLLIElement>, id: string) => void;
}>({
  active: "",
  onChange: () => null,
});
