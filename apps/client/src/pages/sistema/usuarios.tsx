import { Page } from "../../components/page";
import { PageTitle } from "../../components/page-title";
import { Auth } from "../../features/auth";
import { UsuarioForm } from "../../features/usuario/usuario-form";
import { UsuarioList } from "../../features/usuario/usuario-list";

export default function Usuarios() {
  return (
    <Auth>
      <Page title="Usuarios">
        <PageTitle title="Cadastro de Usuários" />
        <hr />
        <div className="flex flex-col gap-2">
          <UsuarioForm />
          <UsuarioList />
        </div>
      </Page>
    </Auth>
  );
}
