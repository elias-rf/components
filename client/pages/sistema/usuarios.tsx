import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { Auth } from "../../features/auth";
import { UsuarioForm } from "../../features/usuario/usuario_form";
import { UsuarioList } from "../../features/usuario/usuario_list";

export default function Usuarios() {
  return (
    <Auth>
      <Page>
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
