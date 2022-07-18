import React from "react";
import { Page, PageTitle } from "../../components";
import { Auth } from "../../features/auth";
import { Controles as Control } from "../../features/controles/controles";

function Controles() {
  const [active, setActive] = React.useState("pg1");

  return (
    <Auth>
      <Page>
        <PageTitle title="Controle de Produção" />
        <Control />
      </Page>
    </Auth>
  );
}

export default Controles;
