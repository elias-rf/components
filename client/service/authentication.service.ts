import { TCurrentUser } from "../../types";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { isEmpty } from "../../utils/identify/is_empty";
import { userStore } from "../state/user-store";

function setStore(currentUser: TCurrentUser) {
  userStore.setState({
    currentUser,
    isAuthenticated: !isEmpty(currentUser),
  });
}

/** api de autenticação do usuário */
export const authenticationService = {
  async isAuthenticated(): Promise<boolean> {
    const user = await fetcherRpc.query("me");
    setStore(user);
    return user.usuario_id !== 0;
  },
  async login(user: string, password: string): Promise<TCurrentUser> {
    const currentUser = await fetcherRpc.mutation("login", { user, password });
    setStore(currentUser);
    return currentUser;
  },
  async logout() {
    setStore({ group_id: "", usuario_id: 0, nome: "", nome_login: "" });
    return fetcherRpc.mutation("logout");
  },
  async me(): Promise<TCurrentUser> {
    const currentUser = await fetcherRpc.query("me");
    setStore(currentUser);
    return currentUser;
  },
};
