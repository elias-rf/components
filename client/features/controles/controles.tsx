import React from "react";

import { Tab } from "../../components/tabs/tab";
import { Tabs } from "../../components/tabs/tabs";
import { EstExt } from "./est_ext/est-ext";
import { EstInt } from "./est_int/est-int";
import { Operacao } from "./operacao/operacao";
import { Transferencia } from "./transferencia/transferencia";

export function Controles() {
  const [active, setActive] = React.useState("");

  return (
    <div className={"max-h-screen overflow-auto"}>
      <Tabs
        active={active}
        onChange={(event, id) => setActive(id)}
      >
        <Tab
          id="operacao"
          title="Operação"
        >
          <Operacao />
        </Tab>
        <Tab
          id="est-int"
          title="Esterilização Int"
        >
          <EstInt />
        </Tab>
        <Tab
          id="est-ext"
          title="Esterilização Ext"
        >
          <EstExt />
        </Tab>
        <Tab
          id="transferencia"
          title="Transferência"
        >
          <Transferencia />
        </Tab>
      </Tabs>
    </div>
  );
}
