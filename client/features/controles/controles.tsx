import React from "react";

import { Tab } from "../../components/tabs/tab";
import { Tabs } from "../../components/tabs/tabs";

import { EstExt } from "./est_ext";
import { EstInt } from "./est_int";
import { Operacao } from "./operacao";
import { Transferencia } from "./transferencia";

export function Controles() {
  const [active, setActive] = React.useState("pg1");

  return (
    <div className="max-h-screen overflow-auto">
      <Tabs active={active} onChangeEvent={(event) => setActive(event.value)}>
        <Tab id="operacao" title="Operação">
          <Operacao />
        </Tab>
        <Tab id="est-int" title="Esterilização Int">
          <EstInt />
        </Tab>
        <Tab id="est-ext" title="Esterilização Ext">
          <EstExt />
        </Tab>
        <Tab id="transferencia" title="Transferência">
          <Transferencia />
        </Tab>
      </Tabs>
    </div>
  );
}
