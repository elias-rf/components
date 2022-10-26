import { CurrentUser } from "../../types";
import { isEmpty } from "../../utils/identify/is-empty";
import { fetcherRpc } from "../lib/http/fetcher-rpc";
import { userStore } from "../state/user-store";

function setStore(currentUser: CurrentUser) {
  userStore.setState({
    currentUser,
    isAuthenticated: !isEmpty(currentUser),
  });
}

export const authenticationService = {
  async isAuthenticated(): Promise<boolean> {
    const user = await fetcherRpc("me");
    setStore(user);
    return user.usuario_id !== 0;
  },
  async login(user: string, password: string): Promise<CurrentUser> {
    const currentUser = await fetcherRpc("login", { user, password });
    setStore(currentUser);
    return currentUser;
  },
  async logout() {
    setStore({ group_id: "", usuario_id: 0, nome: "", nome_login: "" });
    return fetcherRpc("logout");
  },
  async me(): Promise<CurrentUser> {
    const currentUser = await fetcherRpc("me");
    setStore(currentUser);
    return currentUser;
  },
};
