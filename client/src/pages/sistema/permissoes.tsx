import { Page, PageTitle } from "../../components";
import { Auth } from "../../features/auth";
// import PermissaoService from "../../service/permissao.service";

export default function Permissoes() {
  return (
    <Auth>
      <Page>
        <PageTitle title="Permissões" />
        <hr />
      </Page>
    </Auth>
  );
}
