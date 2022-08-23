import { Page } from "../../components/page";
import { PageTitle } from "../../components/page-title";
import { Auth } from "../../features/auth";
import Vendas from "../../features/vendas/vendas-30dias";

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
