import React, { useEffect } from "react";
import Datatable from "@/features/ui/table/table";
import day from "@/lib/day";

import EstExtMensalService from "service/est-ext-mensal.service";
import EstExtModeloService from "service/est-ext-modelo.service";
import EstExtProdutoService from "service/est-ext-produto.service";
import EstExtDiariaService from "service/est-ext-diaria.service";

import DataContext, { ClientContext } from "@/contexts/data-context";
import { Schema } from "../../../index.d";

export default function EstExt() {
  const { clientKnex } = React.useContext(DataContext) as ClientContext;
  const mensalSvc = EstExtMensalService(clientKnex);
  const diariaSvc = EstExtDiariaService(clientKnex);
  const modeloSvc = EstExtModeloService(clientKnex);
  const produtoSvc = EstExtProdutoService(clientKnex);

  const [mesCorrente, setMesCorrente] = React.useState([]);
  const [diaCorrente, setDiaCorrente] = React.useState([]);
  const [produtoCorrente, setProdutoCorrente] = React.useState([]);

  const [mensalData, setMensalData] = React.useState([]);
  const [diariaData, setDiariaData] = React.useState([]);
  const [modeloData, setModeloData] = React.useState([]);
  const [produtoData, setProdutoData] = React.useState([]);

  const [mensalSchema, setMensalSchema] = React.useState({} as Schema);
  const [diariaSchema, setDiariaSchema] = React.useState({} as Schema);
  const [modeloSchema, setModeloSchema] = React.useState({} as Schema);
  const [produtoSchema, setProdutoSchema] = React.useState({} as Schema);

  React.useEffect(() => {
    mensalSvc.schema().then(setMensalSchema);
    diariaSvc.schema().then(setDiariaSchema);
    produtoSvc.schema().then(setProdutoSchema);
    modeloSvc.schema().then(setModeloSchema);
  }, []);

  React.useEffect(() => {
    mensalSvc
      .list(day().subtract(13, "month").format("YYYY-MM"))
      .then(setMensalData);

    diariaSvc
      .list(
        day(mesCorrente[0] + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mesCorrente[0] + "-01")
          .endOf("month")
          .format("YYYY-MM-DD")
      )
      .then(setDiariaData);

    modeloSvc.list(diaCorrente[0], produtoCorrente[0]).then(setModeloData);

    produtoSvc.list(diaCorrente[0]).then(setProdutoData);
  }, [mesCorrente, diaCorrente, produtoCorrente]);

  return (
    <div className="flex">
      <div className="p-2">
        <Datatable
          data={mensalData}
          schema={mensalSchema}
          selected={mesCorrente}
          onSelect={setMesCorrente}
        >
          <Datatable
            data={diariaData}
            schema={diariaSchema}
            selected={diaCorrente}
            onSelect={setDiaCorrente}
          >
            <Datatable
              data={produtoData}
              schema={produtoSchema}
              selected={produtoCorrente}
              onSelect={setProdutoCorrente}
            >
              <Datatable
                data={modeloData}
                schema={modeloSchema}
              ></Datatable>
            </Datatable>
          </Datatable>
        </Datatable>
      </div>
    </div>
  );
}
