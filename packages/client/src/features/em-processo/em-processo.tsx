import DataContext, { ClientContext } from "@/contexts/data-context";
import Table from "@/features/ui/table/table";
import linkIcon from "@iconify/icons-carbon/link";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import EmProcessoDiariaService from "service/em-processo-diaria.service";
import EmProcessoModeloService from "service/em-processo-modelo.service";
import EmProcessoOPService from "service/em-processo-op.service";
import EmProcessoOperacaoService from "service/em-processo-operacao.service";
import EmProcessoProdutoService from "service/em-processo-produto.service";
import type { Schema } from "../../..";

interface LinkOPPros {
  op: string;
}

function LinkOP({ op }: LinkOPPros) {
  return (
    <div className="flex space-x-1">
      <span>{op} </span>
      <a
        href={`/industrial/ordemProducao/${op}`}
        target="_blank"
        rel="noreferrer"
        title="Abrir Ordem de Produção"
      >
        <Icon icon={linkIcon} />
      </a>
    </div>
  );
}

export default function EmProcesso() {
  const { client } = React.useContext(DataContext) as ClientContext;

  const diariaSvc = EmProcessoDiariaService(client);
  const modeloSvc = EmProcessoModeloService(client);
  const operacaoSvc = EmProcessoOperacaoService(client);
  const opSvc = EmProcessoOPService(client);
  const produtoSvc = EmProcessoProdutoService(client);

  const [produtoCorrente, setProdutoCorrente] = useState([]);
  const [modeloCorrente, setModeloCorrente] = useState([]);
  const [operacaoCorrente, setOperacaoCorrente] = useState([]);
  const [diaCorrente, setDiaCorrente] = useState([]);

  const [diariaSchema, setDiariaSchema] = React.useState({} as Schema);
  const [modeloSchema, setModeloSchema] = React.useState({} as Schema);
  const [operacaoSchema, setOperacaoSchema] = React.useState({} as Schema);
  const [opSchema, setOPSchema] = React.useState({} as Schema);
  const [produtoSchema, setProdutoSchema] = React.useState({} as Schema);

  const [diariaData, setDiariaData] = React.useState([]);
  const [modeloData, setModeloData] = React.useState([]);
  const [operacaoData, setOperacaoData] = React.useState([]);
  const [opData, setOPData] = React.useState([]);
  const [produtoData, setProdutoData] = React.useState([]);

  // schemas
  React.useEffect(() => {
    diariaSvc.schema().then(setDiariaSchema);
    produtoSvc.schema().then(setProdutoSchema);
    modeloSvc.schema().then(setModeloSchema);
    operacaoSvc.schema().then(setOperacaoSchema);
    opSvc.schema().then(setOPSchema);
  }, []);

  React.useEffect(() => {
    produtoSvc.list().then(setProdutoData);
    modeloSvc.list(produtoCorrente[0]).then(setModeloData);
    operacaoSvc.list(modeloCorrente[0]).then(setOperacaoData);
    diariaSvc.list(modeloCorrente[0], operacaoCorrente[0]).then(setDiariaData);
    opSvc
      .list(diaCorrente[0], modeloCorrente[0], operacaoCorrente[0])
      .then(setOPData);
  }, [diaCorrente, produtoCorrente, modeloCorrente, operacaoCorrente]);

  return (
    <div className="max-h-screen overflow-auto">
      <div className="flex">
        <div className="p-2">
          <Table
            data={produtoData}
            onSelect={setProdutoCorrente}
            schema={produtoSchema}
            selected={produtoCorrente}
          >
            <Table
              data={modeloData}
              onSelect={setModeloCorrente}
              schema={modeloSchema}
              selected={modeloCorrente}
            >
              <Table
                data={operacaoData}
                onSelect={setOperacaoCorrente}
                schema={operacaoSchema}
                selected={operacaoCorrente}
              >
                <Table
                  data={diariaData}
                  onSelect={setDiaCorrente}
                  schema={diariaSchema}
                  selected={diaCorrente}
                >
                  <Table
                    data={opData}
                    schema={opSchema}
                  />
                </Table>
              </Table>
            </Table>
          </Table>
        </div>
      </div>
    </div>
  );
}
