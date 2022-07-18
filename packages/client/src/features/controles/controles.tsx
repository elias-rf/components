import React from "react";

import { Tab, Tabs } from "../../components";

import { EstExt } from "../../features/controles/est-ext";
import { EstInt } from "../../features/controles/est-int";
import { Operacao } from "../../features/controles/operacao";
import { Transferencia } from "../../features/controles/transferencia";

export function Controles() {
  const [active, setActive] = React.useState("pg1");

  return (
    <div className="max-h-screen overflow-auto">
      <Tabs
        active={active}
        onChange={(id) => setActive(id)}
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
