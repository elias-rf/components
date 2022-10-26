import React, { useState } from "react";

interface MenuProviderProps {
  children: React.ReactElement;
}

type MenuContextType = [
  currentGroup: string,
  setCurrentGroup: (group: string) => void
];

export const MenuContext = React.createContext<Partial<MenuContextType>>([]);

export function MenuProvider({ children }: MenuProviderProps) {
  const [currentGroup, setCurrentGroup] = useState("");

  return (
    <MenuContext.Provider value={[currentGroup, setCurrentGroup]}>
      {children}
    </MenuContext.Provider>
  );
}