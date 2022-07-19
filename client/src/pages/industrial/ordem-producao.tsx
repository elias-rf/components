import { Page, PageTitle } from "../../components";
import { OrdemProducao } from "../../features/ordem-producao/ordem-producao";

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
