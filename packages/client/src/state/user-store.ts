import isEmpty from "@/utils/is/is-empty";
import create from "zustand";
import { combine, devtools } from "zustand/middleware";
import type { CurrentUser } from "../..";
import PermissaoService from "../service/permissao.service";

const permissaoService = PermissaoService();

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
        const user = await permissaoService.login(username, password);
        if (user.kUsuario) {
          set({ currentUser: user });
        } else {
          set({ currentUser: initialState });
        }
        return user;
      },
      signOut: async () => {
        await permissaoService.logout();
        set({ currentUser: initialState });
      },
      can: permissaoService.can,
    }))
  )
);

async function runStart() {
  const resp = await permissaoService.me();

  if (!isEmpty(resp)) {
    useUserStore.setState({ currentUser: resp });
  }
}

runStart();

export default useUserStore;
