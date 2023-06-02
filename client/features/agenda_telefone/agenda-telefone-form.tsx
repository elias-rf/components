import { useForm } from "@/client/lib/hooks/use-form";
import type { TAgendaTelefone } from "@/models/agenda-telefone/agenda-telefone.type";
import { TId } from "@/types";
import { trpc } from "@/utils/trpc/trpc";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import React from "react";

type TAgendaTelefoneFormProps = {
  id: TId;
  onCreate?: (rec: TAgendaTelefone) => void;
  onUpdate?: (rec: TAgendaTelefone) => void;
  onDel?: (ok: number) => void;
};

type TStatus = "edit" | "new" | "view";

const dataClear = {
  agenda_telefone_id: "0",
  nome: "xx",
  setor: "",
  email: "",
};

export const AgendaTelefoneForm = ({
  id,
  onCreate,
  onUpdate,
  onDel,
}: TAgendaTelefoneFormProps) => {
  const [status, setStatus] = React.useState<TStatus>("new");
  const utils = trpc.useContext();

  // const dataRead = trpc.agendaTelefone.read.useQuery({ id });
  // const dataUpdate = trpc.agendaTelefone.update.useMutation({
  //   onSuccess: (rec) => {
  //     utils.agendaTelefone.invalidate();
  //     if (onUpdate) onUpdate(rec);
  //   },
  // });
  // const dataCreate = trpc.agendaTelefone.create.useMutation({
  //   onSuccess: (rec) => {
  //     utils.agendaTelefone.invalidate();
  //     if (onCreate) onCreate(rec);
  //   },
  // });
  // const dataDel = trpc.agendaTelefone.del.useMutation({
  //   onSuccess: (ok) => {
  //     utils.agendaTelefone.invalidate();
  //     if (onDel) onDel(ok);
  //   },
  // });

  const onSubmitHandler = (values: any) => {
    console.log(`Submitted`);
    console.log(values);
  };

  const form = useForm({ onSubmit: onSubmitHandler, initialValues: dataClear });
  //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),

  // React.useEffect(() => {
  //   if (status === "view") {
  //     form.setDisableds(true);
  //   } else {
  //     form.setDisableds(false);
  //   }
  // }, [status, form]);

  // atualiza state do form quando com o ID passado
  // React.useEffect(() => {
  //   if (isEmpty(id) || !isNumber(id[0].value)) {
  //     form.reset();
  //     return;
  //   }
  // }, [id, form]);

  // atualiza state do form quando for lido do servidor
  // React.useEffect(() => {
  //   if (dataRead.data && dataRead.data.agenda_telefone_id) {
  //     form.reset(dataRead.data);
  //     // form.resetDirty(dataRead.data);
  //     setStatus("view");
  //   }
  // }, [dataRead.data, form]);

  // function handleButtonCancel() {
  //   if (status === "edit") {
  //     form.reset(dataRead.data);
  //     // form.resetDirty(dataRead.data);
  //   }
  //   if (status === "new") {
  //     form.reset();
  //   }
  //   setStatus("view");

  //   console.log("cancel");
  // }

  // function handleButtonEdit() {
  //   setStatus("edit");
  // }

  // function handleButtonNew() {
  //   setStatus("new");
  //   form.reset(dataClear);
  //   // form.resetDirty(dataClear);
  // }

  // function handleButtonDel() {
  //   setStatus("view");
  //   dataDel.mutate({ id });
  // }

  // function handleButtonSave() {
  //   setStatus("view");
  //   if (status === "edit") dataUpdate.mutate({ id, data: form });
  //   if (status === "new") dataCreate.mutate({ data: form });
  // }

  return (
    <section className={"mt-2"}>
      <div className={"flex justify-start gap-2 pb-4"}>
        <Button
          className={"mr-4 w-24"}
          // onClick={handleButtonEdit}
          variant="outlined"
          disabled={status !== "view"}
        >
          Editar
        </Button>
        <Button
          className={"mr-4 w-24"}
          // onClick={handleButtonNew}
          variant="outlined"
        >
          Novo
        </Button>
        <Button
          className={"w-24"}
          // onClick={handleButtonDel}
          variant="outlined"
          color="error"
          disabled={status !== "view"}
        >
          Excluir
        </Button>
      </div>

      <div className={"flex-wrap gap-2 sm:flex"}>
        <TextField
          required
          size="small"
          label="Ramal"
          variant="filled"
          {...form.getInputProps("agenda_telefone_id")}
        />
        <TextField
          required
          size="small"
          label="Nome"
          variant="filled"
          {...form.getInputProps("nome")}
        />
        <TextField
          size="small"
          label="Setor"
          variant="filled"
          {...form.getInputProps("setor")}
        />
        <TextField
          size="small"
          label="Email"
          variant="filled"
          {...form.getInputProps("email")}
        />
      </div>

      <div className={"flex justify-end gap-2 pt-4"}>
        <Button
          // onClick={handleButtonSave}
          variant="outlined"
          disabled={!form.dirty}
        >
          Salvar
        </Button>
        <Button
          // onClick={handleButtonCancel}
          variant="outlined"
          disabled={status === "view"}
        >
          Cancelar
        </Button>
      </div>
    </section>
  );
};
