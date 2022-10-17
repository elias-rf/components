import create from "zustand";

import type { CurrentUser } from "../../types";

const initialState: CurrentUser = {
  kUsuario: "",
  nome: "",
  NomeUsuario: "",
  idGroup: "",
};

export const userStore = create((set) => ({
  currentUser: initialState,
  isAuthenticated: false,
}));
