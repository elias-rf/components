import { Checkbox, Label, Textbox } from "@/features/ui/form";

import PropTypes from "prop-types";
import React from "react";
import { ClienteRecord } from "@/features/cliente/cliente.service";

interface ClienteFormProps {
  record: ClienteRecord;
  onChange: (event: { field: string; value: any }) => void;
}

export default function ClienteForm({
  record = {} as ClienteRecord,
  onChange,
}: ClienteFormProps) {
  const handleLoad = async (event: {
    field: string;
    value: string | boolean;
  }) => {
    if (event.field === "CdCliente") {
      onChange(event);
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
              onChange={handleLoad}
            />
          </div>
          <div className="flex flex-col my-2 w-[50rem]">
            <Label>Nome</Label>
            <Textbox
              value={record.RzSocial}
              field="RzSocial"
              onChange={handleLoad}
            />
          </div>
          <div className="flex flex-col my-2 w-80">
            <Label>Cidade</Label>
            <Textbox
              value={record.Cidade}
              field="Cidade"
              onChange={handleLoad}
            />
          </div>
          <div className="flex flex-col w-10 my-2">
            <Label>UF</Label>
            <Textbox value={record.Uf} field="Uf" onChange={handleLoad} />
          </div>
          <div className="flex flex-col my-2 w-36">
            <Label>CNPJ</Label>
            <Textbox value={record.CGC} field="CGC" onChange={handleLoad} />
          </div>
          <div className="flex flex-col w-20 my-2">
            <Label>Vendedor</Label>
            <Textbox
              value={record.CdVendedor}
              field="CdVendedor"
              onChange={handleLoad}
            />
          </div>
          <div className="flex flex-col w-20 my-2">
            <Label>Ativo</Label>
            <Checkbox
              value={record.FgAtivo === "S"}
              field="FgAtivo"
              onChange={handleLoad}
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
