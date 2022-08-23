import { Action, Dispatch } from "../../../../types";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { TextboxText } from "../../components/textbox-text";

import { TClienteRecord } from "../../service/cliente.service";

interface ClienteFormProps {
  record: TClienteRecord;
  dispatch: Dispatch;
}

export function ClienteForm({
  record = {} as TClienteRecord,
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

            <TextboxText
              value={record.CdCliente}
              field="CdCliente"
              dispatch={handleLoad}
            />
          </div>
          <div className="flex flex-col my-2 w-[50rem]">
            <Label>Nome</Label>
            <TextboxText
              value={record.RzSocial}
              field="RzSocial"
              dispatch={handleLoad}
            />
          </div>
          <div className="flex flex-col my-2 w-80">
            <Label>Cidade</Label>
            <TextboxText
              value={record.Cidade}
              field="Cidade"
              dispatch={handleLoad}
            />
          </div>
          <div className="flex flex-col w-10 my-2">
            <Label>UF</Label>
            <TextboxText
              value={record.Uf}
              field="Uf"
              dispatch={handleLoad}
            />
          </div>
          <div className="flex flex-col my-2 w-36">
            <Label>CNPJ</Label>
            <TextboxText
              value={record.CGC}
              field="CGC"
              dispatch={handleLoad}
            />
          </div>
          <div className="flex flex-col w-20 my-2">
            <Label>Vendedor</Label>
            <TextboxText
              value={record.CdVendedor}
              field="CdVendedor"
              dispatch={handleLoad}
            />
          </div>
          <div className="flex flex-col w-20 my-2">
            <Label>Ativo</Label>
            <Input
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
