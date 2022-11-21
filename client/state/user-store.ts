import create from "zustand";

import type { TCurrentUser } from "../../types";

const initialState: TCurrentUser = {
  usuario_id: 0,
  nome_login: "",
  nome: "",
  group_id: "",
};

/** store para o usuário corrente */
export const userStore = create(() => ({
  currentUser: initialState,
  isAuthenticated: false,
}));
