import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import React from "react";
import { EstExt } from "./est_ext/est-ext";
import { EstInt } from "./est_int/est-int";
import { Operacao } from "./operacao/operacao";
import { Transferencia } from "./transferencia/transferencia";

function TabPanel({
  children,
  value,
  index,
}: {
  children: React.ReactNode;
  value: string;
  index: string;
}) {
  if (value !== index) {
    return null;
  }

  return <Box sx={{ p: 3 }}>{children}</Box>;
}

export function Controles() {
  const [tab, setTab] = React.useState("");

  return (
    <>
      <Typography variant="h5">Controle de Produção</Typography>
      <Tabs
        value={tab}
        onChange={(_, id) => setTab(id)}
      >
        <Tab
          value="operacao"
          label="Operação"
        ></Tab>
        <Tab
          value="est-int"
          label="Esterilização Int"
        ></Tab>
        <Tab
          value="est-ext"
          label="Esterilização Ext"
        ></Tab>
        <Tab
          value="transferencia"
          label="Transferência"
        ></Tab>
      </Tabs>
      <TabPanel
        index={tab}
        value={"operacao"}
      >
        <Operacao />
      </TabPanel>
      <TabPanel
        index={tab}
        value={"est-int"}
      >
        <EstInt />
      </TabPanel>
      <TabPanel
        index={tab}
        value={"est-ext"}
      >
        <EstExt />
      </TabPanel>
      <TabPanel
        index={tab}
        value={"transferencia"}
      >
        <Transferencia />
      </TabPanel>
    </>
  );
}
