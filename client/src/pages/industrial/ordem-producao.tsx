import React from "react";
import PageTitle from "@/features/ui/page-title";
import Page from "@/features/ui/page";
import OrdemProducao from "@/features/ordem-producao/ordem-producao";

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
