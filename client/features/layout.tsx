import { Outlet, useNavigate } from "react-router-dom";
import type { TEvent } from "../../types";
import { DefaultLayout } from "../components/layout/default_layout";
import { menu } from "../menu";
import { authenticationStore } from "../service/authentication.service";

/** feature Layout com menu de páginas do aplicativo */
export function Layout({ children }: { children?: any }) {
  const authenticated = authenticationStore(
    (state: any) => state.isAuthenticated
  );
  const navigate = useNavigate();

  async function handleMenu(event: TEvent) {
    navigate(event.value);
  }

  return (
    <DefaultLayout
      menu={menu}
      onClickEvent={handleMenu}
      isAuthenticated={authenticated}
    >
      <Outlet />
      {children}
    </DefaultLayout>
  );
}
