import React from "react";

import PageTitle from "@/features/ui/page-title";
import Page from "@/features/ui/page";
import Authorization from "@/features/ui/authorization";

import Control from "@/features/controles/controles";

function Controles() {
  const [active, setActive] = React.useState("pg1");

  return (
    <Authorization>
      <Page>
        <PageTitle title="Controle de Produção" />
        <Control />
      </Page>
    </Authorization>
  );
}

export default Controles;
