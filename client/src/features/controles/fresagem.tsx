import Datatable from "@/features/ui/table/table";
import React from "react";
import day from "@/lib/day";

import OperacaoTurnoService from "service/operacao-turno.service";
import OperacaoMensalService from "service/operacao-mensal.service";
import OperacaoModeloService from "service/operacao-modelo.service";
import OperacaoProdutoService from "service/operacao-produto.service";
import OperacaoDiariaService from "service/operacao-diaria.service";
import { Schema } from "../../../index.d";
import DataContext, { ClientContext } from "@/contexts/data-context";

export default function Operacao() {
  const { clientKnex } = React.useContext(DataContext) as ClientContext;
  const mensalSvc = OperacaoMensalService(clientKnex);
  const diariaSvc = OperacaoDiariaService(clientKnex);
  const turnoSvc = OperacaoTurnoService(clientKnex);
  const modeloSvc = OperacaoModeloService(clientKnex);
  const produtoSvc = OperacaoProdutoService(clientKnex);

  const [mesCorrente, setMesCorrente] = React.useState([]);
  const [diaCorrente, setDiaCorrente] = React.useState([]);
  const [produtoCorrente, setProdutoCorrente] = React.useState([]);

  const [mensalData, setMensalData] = React.useState([]);
  const [diariaData, setDiariaData] = React.useState([]);
  const [modeloData, setModeloData] = React.useState([]);
  const [produtoData, setProdutoData] = React.useState([]);
  const [turnoData, setTurnoData] = React.useState([]);

  const [mensalSchema, setMensalSchema] = React.useState({} as Schema);
  const [diariaSchema, setDiariaSchema] = React.useState({} as Schema);
  const [modeloSchema, setModeloSchema] = React.useState({} as Schema);
  const [produtoSchema, setProdutoSchema] = React.useState({} as Schema);
  const [turnoSchema, setTurnoSchema] = React.useState({} as Schema);

  const operacaoCorrente = "2018";
  // schemas
  React.useEffect(() => {
    turnoSvc.schema().then(setTurnoSchema);
    mensalSvc.schema().then(setMensalSchema);
    diariaSvc.schema().then(setDiariaSchema);
    produtoSvc.schema().then(setProdutoSchema);
    modeloSvc.schema().then(setModeloSchema);
  }, []);

  React.useEffect(() => {
    mensalSvc
      .list(operacaoCorrente, day().subtract(13, "month").format("YYYY-MM"))
      .then(setMensalData);
    diariaSvc
      .list(
        operacaoCorrente,
        day(mesCorrente[0] + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mesCorrente[0] + "-01")
          .endOf("month")
          .format("YYYY-MM-DD")
      )
      .then(setDiariaData);
    modeloSvc
      .list(operacaoCorrente, diaCorrente[0], produtoCorrente[0])
      .then(setModeloData);
    produtoSvc.list(operacaoCorrente, diaCorrente[0]).then(setProdutoData);
    turnoSvc.list(operacaoCorrente, diaCorrente[0]).then(setTurnoData);
  }, [mesCorrente, diaCorrente, produtoCorrente, operacaoCorrente]);

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
            <Datatable
              data={turnoData}
              schema={turnoSchema}
            ></Datatable>
          </Datatable>
        </Datatable>
      </div>
    </div>
  );
}
