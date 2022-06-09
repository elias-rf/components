import { Checkbox, Label, Textbox } from "@/features/ui/form";
import PropTypes from "prop-types";
import React from "react";
import { ClienteRecord } from "service/cliente.service";
import { Action, Dispatch } from "../../..";

interface ClienteFormProps {
  record: ClienteRecord;
  dispatch: Dispatch;
}

export default function ClienteForm({
  record = {} as ClienteRecord,
  dispatch,
}: ClienteFormProps) {
  const handleLoad = async (action: Action) => {
    if (action.payload.field === "CdCliente") {
      dispatch({ type: "select", payload: action.payload });
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap space-x-4">
          <div className="flex flex-col w-24 my-2">
            <Label>Código</Label>

            <Textbox
              value={record.CdCliente}
              field="CdCliente"
              dispatch={handleLoad}
            />
          </div>
          <div className="flex flex-col my-2 w-[50rem]">
            <Label>Nome</Label>
            <Textbox
              value={record.RzSocial}
              field="RzSocial"
              dispatch={handleLoad}
            />
          </div>
          <div className="flex flex-col my-2 w-80">
            <Label>Cidade</Label>
            <Textbox
              value={record.Cidade}
              field="Cidade"
              dispatch={handleLoad}
            />
          </div>
          <div className="flex flex-col w-10 my-2">
            <Label>UF</Label>
            <Textbox
              value={record.Uf}
              field="Uf"
              dispatch={handleLoad}
            />
          </div>
          <div className="flex flex-col my-2 w-36">
            <Label>CNPJ</Label>
            <Textbox
              value={record.CGC}
              field="CGC"
              dispatch={handleLoad}
            />
          </div>
          <div className="flex flex-col w-20 my-2">
            <Label>Vendedor</Label>
            <Textbox
              value={record.CdVendedor}
              field="CdVendedor"
              dispatch={handleLoad}
            />
          </div>
          <div className="flex flex-col w-20 my-2">
            <Label>Ativo</Label>
            <Checkbox
              value={record.FgAtivo === "S"}
              field="FgAtivo"
              dispatch={handleLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ClienteForm.propTypes = {
  record: PropTypes.object,
  fields: PropTypes.array,
  onChange: PropTypes.func,
};

ClienteForm.defaultProps = {
  onChange: () => {},
  record: {},
};
