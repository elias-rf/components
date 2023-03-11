import { create } from "zustand";

type MenuState = {
  currentGroup: string;
  show: boolean;
  setCurrentGroup: (group: string) => void;
  setShow: (shw: boolean) => void;
};

export const useMenuStore = create<MenuState>()((set) => ({
  currentGroup: "",
  show: true,
  setCurrentGroup: (group: string) => set(() => ({ currentGroup: group })),
  setShow: (shw: boolean) => set(() => ({ show: shw })),
}));
