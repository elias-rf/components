import create from "zustand";
import AuthService from "../service/permissao.service";
import knexRequest from "@/lib/knex/knex-request";
import type { CurrentUser } from "../../index.d";
import { devtools, combine } from "zustand/middleware";
import isEmpty from "@/utils/is/is-empty";

const authService = AuthService(knexRequest);

const initialState: CurrentUser = {
  kUsuario: "",
  nome: "",
  NomeUsuario: "",
  idGroup: "",
};

const useUserStore = create(
  devtools(
    combine({ currentUser: initialState }, (set, get: any) => ({
      isAuthenticated: () => get().currentUser.kUsuario !== "",
      signIn: async (username: string, password: string) => {
        const user = await authService.login(username, password);
        if (user.kUsuario) {
          set({ currentUser: user });
        } else {
          set({ currentUser: initialState });
        }
        return user;
      },
      signOut: async () => {
        await authService.logout();
        set({ currentUser: initialState });
      },
      can: authService.can,
    }))
  )
);

async function runStart() {
  const resp = await authService.me();

  if (!isEmpty(resp)) {
    useUserStore.setState({ currentUser: resp });
  }
}

runStart();

export default useUserStore;
