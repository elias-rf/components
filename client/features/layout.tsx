import { Outlet, useNavigate } from "react-router-dom";
import { trpc } from "../../utils/trpc/trpc";
import { LayoutDefault } from "../components/layout/default_layout";
import { menu } from "../menu";

/** feature Layout com menu de páginas do aplicativo */
export function Layout({ children }: { children?: any }) {
  const me = trpc.usuario.me.useQuery();

  const navigate = useNavigate();

  async function handleMenu(to: string) {
    navigate(to);
  }

  return (
    <LayoutDefault
      menu={menu}
      onClick={handleMenu}
      me={{}}
    >
      <Outlet />
      {children}
    </LayoutDefault>
  );
}
