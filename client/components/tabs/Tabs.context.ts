import React from "react";
import { TTabsEvent } from "./tabs.types";

export const TabsContext = React.createContext<{
  active: string;
  onChangeEvent: (event: TTabsEvent) => void;
}>({
  active: "",
  onChangeEvent: () => undefined,
});
