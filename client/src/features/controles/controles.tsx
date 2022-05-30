import React from "react";

import Tabs, { Tab } from "@/features/ui/tabs";

import EstExt from "@/features/controles/est-ext";
import EstInt from "@/features/controles/est-int";
import Fresagem from "@/features/controles/fresagem";
import Operacao from "@/features/controles/operacao";
import Transferencia from "@/features/controles/transferencia";
import TreeView from "@/features/ui/tree-view";

const treeData = [
  {
    key: "operacao",
    label: "Operação",
    child: [
      { key: "1010", label: "1010 Torno Lado 1" },
      { key: "2010", label: "2010 Torno Lado 2" },
    ],
  },
  {
    key: "est-int",
    label: "Esterilização Interna",
    child: [
      { key: "2022", label: "2022" },
      { key: "2021", label: "2021" },
    ],
  },
  {
    key: "est-ext",
    label: "Esterilização Externa",
    child: [
      { key: "2022", label: "2022" },
      { key: "2021", label: "2021" },
    ],
  },
  {
    key: "transferencia",
    label: "Transferencia",
    child: [
      { key: "2022", label: "2022" },
      { key: "2021", label: "2021" },
    ],
  },
];

export default function Controles() {
  const [active, setActive] = React.useState("pg1");
  const [selected, setSelected] = React.useState("operacao");

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
          id="fresagem"
          title="Fresagem"
        >
          <Fresagem />
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
