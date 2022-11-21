import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { OrdemProducao } from "../../features/ordem_producao/ordem_producao";

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
function IndustrialOrdemProducao() {
  return (
    <Page>
      <PageTitle title="Ordem de Produção" />
      <hr />
      <OrdemProducao />
    </Page>
  );
}

export default IndustrialOrdemProducao;
