import Vendas from "../../features/vendas/vendas-30dias";
import PageTitle from "@/features/ui/page-title";
import Page from "@/features/ui/page";
import Authorization from "@/features/ui/authorization";

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
function Vendas30dias() {
  return (
    <Authorization>
      <Page>
        <PageTitle title="Vendas 30 Dias" />
        <Vendas />
      </Page>
    </Authorization>
  );
}

export default Vendas30dias;
