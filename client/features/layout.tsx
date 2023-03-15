import { Outlet, useNavigate } from "react-router-dom";
import { usuarioStore } from "../../model/usuario/usuario.store";
import { DefaultLayout } from "../components/layout/default_layout";
import { menu } from "../menu";

/** feature Layout com menu de páginas do aplicativo */
export function Layout({ children }: { children?: any }) {
  const isAuthenticated = usuarioStore((state: any) => state.isAuthenticated);

  const navigate = useNavigate();

  async function handleMenu(event: any) {
    navigate(event.value);
  }

  return (
    <DefaultLayout
      menu={menu}
      onClick={handleMenu}
      isAuthenticated={isAuthenticated}
    >
      <Outlet />
      {children}
    </DefaultLayout>
  );
}
