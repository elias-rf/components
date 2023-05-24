import { Form } from "@/client/components/form/form";
import { useForm } from "@/client/components/form/use-form";
import type {
  TAgendaTelefone,
  TAgendaTelefoneIds,
} from "@/models/agenda-telefone/agenda-telefone.type";
import { isEmpty } from "@/utils/identify/is-empty";
import { isNumber } from "@/utils/identify/is-number";
import { trpc } from "@/utils/trpc/trpc";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import React from "react";



type TAgendaTelefoneFormProps = {
  id: TAgendaTelefoneIds;
  onCreate?: (rec: TAgendaTelefone) => void;
  onUpdate?: (rec: TAgendaTelefone) => void;
  onDel?: (ok: number) => void;
};

type TStatus = "edit" | "new" | "view";

const dataClear = {
  agenda_telefone_id: 0,
  nome: "",
  setor: "",
  email: "",
};

export const AgendaTelefoneForm = ({
  id,
  onCreate,
  onUpdate,
  onDel,
}: TAgendaTelefoneFormProps) => {
  const utils = trpc.useContext();
  const dataRead = trpc.agendaTelefone.read.useQuery({ ids:id });

  const dataUpdate = trpc.agendaTelefone.update.useMutation({
    onSuccess: (rec) => {
      utils.agendaTelefone.invalidate();
      if (onUpdate) onUpdate(rec);
    },
  });
  const dataCreate = trpc.agendaTelefone.create.useMutation({
    onSuccess: (rec) => {
      utils.agendaTelefone.invalidate();
      if (onCreate) onCreate(rec);
    },
  });
  const dataDel = trpc.agendaTelefone.del.useMutation({
    onSuccess: (ok) => {
      utils.agendaTelefone.invalidate();
      if (onDel) onDel(ok);
    },
  });

  const [status, setStatus] = React.useState<TStatus>("new");

  const onSubmitHandler = (values: any) => {
    console.log(`Submitted`);
    console.log(values);
  };

  const form = useForm(onSubmitHandler, dataClear);
    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
    // },

  // atualiza state do form quando com o ID passado
  React.useEffect(() => {
    if (isEmpty(id) || !isNumber(id.agenda_telefone_id)) {
      form.reset();
      return;
    }
  }, [id]);

  // atualiza state do form quando for lido do servidor
  React.useEffect(() => {
    if (dataRead.data && dataRead.data.agenda_telefone_id) {
      form.setValues(dataRead.data);
      // form.resetDirty(dataRead.data);
      setStatus("view");
    }
  }, [dataRead.data]);

  function handleButtonCancel() {
    if (status === "edit") {
      form.setValues(dataRead.data);
      // form.resetDirty(dataRead.data);
    }
    if (status === "new") {
      form.reset();
    }
    setStatus("view");

    console.log("cancel");
  }

  function handleButtonEdit() {
    setStatus("edit");
  }

  function handleButtonNew() {
    setStatus("new");
    form.setValues(dataClear);
    // form.resetDirty(dataClear);
  }

  function handleButtonDel() {
    setStatus("view");
    dataDel.mutate({ id });
  }

  function handleButtonSave() {
    setStatus("view");
    if (status === "edit") dataUpdate.mutate({ id, data: form });
    if (status === "new") dataCreate.mutate({ data: form });
  }



  return (
    <section className={"mt-2"}>
      {status === "view" ? (
        <div className={"flex justify-end"}>
          <Button
            className={"mr-4 w-24"}
            onClick={handleButtonEdit}
          >
            Editar
          </Button>
          <Button
            className={"mr-4 w-24"}
            onClick={handleButtonNew}
          >
            Novo
          </Button>
          <Button
            className={"w-24"}
            onClick={handleButtonDel}
          >
            Excluir
          </Button>
        </div>
      ) : null}
      <Form        form={form}      >
        <div className={"flex-wrap gap-2 sm:flex"}>
          <TextField
            withAsterisk
            label={"Ramal"}
            disabled={status === "view"}
            {...form.getInputProps("agenda_telefone_id")}
          />
          <TextField
            withAsterisk
            label={"Nome"}
            disabled={status === "view"}
            {...form.getInputProps("nome")}
          />
          <TextField
            label={"Setor"}
            {...form.getInputProps("setor")}
          />
          <TextField
            label={"Email"}
            {...form.getInputProps("email")}
          />
        </div>
      </Form>
      {status === "view" ? null : (
        <div className={"flex justify-end"}>
          {form.isDirty() ? (
            <Button onClick={handleButtonSave}>Salvar</Button>
          ) : null}
          <Button onClick={handleButtonCancel}>Cancelar</Button>
        </div>
      )}
    </section>
  );
};
