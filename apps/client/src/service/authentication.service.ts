import { CurrentUser } from "@er/types";
import { isEmpty } from "@er/utils/src/is-empty";
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
    return user.kUsuario !== "";
  },
  async login(user: string, password: string): Promise<CurrentUser> {
    const currentUser = await fetcherRpc("login", { user, password });
    setStore(currentUser);
    return currentUser;
  },
  async logout() {
    setStore({ idGroup: "", kUsuario: "", nome: "", NomeUsuario: "" });
    return fetcherRpc("logout");
  },
  async me(): Promise<CurrentUser> {
    const currentUser = await fetcherRpc("me");
    setStore(currentUser);
    return currentUser;
  },
};
