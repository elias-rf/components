import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { Auth } from "../../features/auth";
import { Vendas30dias as Vendas } from "../../features/vendas/vendas_30dias";

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
function Vendas30dias() {
  return (
    <Auth>
      <Page>
        <PageTitle title="Vendas 30 Dias" />
        <Vendas />
      </Page>
    </Auth>
  );
}

export default Vendas30dias;
