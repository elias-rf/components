import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page-title";
import { Auth } from "../../features/auth";
import { Controles as Control } from "../../features/controles/controles";

export default function Controles() {
  return (
    <Auth>
      <Page>
        <PageTitle title="Controle de Produção" />
        <Control />
      </Page>
    </Auth>
  );
}
