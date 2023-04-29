import { Button } from "@mantine/core";
import { TUsuario, TUsuarioIds } from "@mono/models/usuario/usuario.type";
import { isEmpty } from "@mono/utils/identify/is_empty";
import { recordClear } from "@mono/utils/schema/record-clear";
import { trpc } from "@mono/utils/trpc/trpc";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Field } from "../../components/field";
import { isNumber } from "../../lib/valid/isNumber";
import { usuarioSchema } from "./usuario-schema";

type TUsuarioFormProps = {
  id: TUsuarioIds;
  onCreate?: (rec: TUsuario) => void;
  onUpdate?: (rec: TUsuario) => void;
  onDel?: (ok: number) => void;
};

type TStatus = "edit" | "new" | "view";

const dataClear = recordClear(usuarioSchema);

export function UsuarioForm({
  id,
  onCreate,
  onUpdate,
  onDel,
}: TUsuarioFormProps) {
  const utils = trpc.useContext();
  const dataRead = trpc.usuario.read.useQuery({ id });

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

  const formMethods = useForm({ defaultValues: dataClear });

  // atualiza state do form quando com o ID passado
  React.useEffect(() => {
    if (isEmpty(id) || !isNumber(id.usuario_id)) {
      return formMethods.reset(dataClear);
    }
  }, [id]);

  // atualiza state do form quando for lido do servidor
  React.useEffect(() => {
    if (dataRead.data && dataRead.data.usuario_id) {
      formMethods.reset(dataRead.data);
      setStatus("view");
    }
  }, [dataRead.data]);

  function handleButtonCancel() {
    setStatus("view");
    formMethods.reset();
    console.log("cancel");
  }

  function handleButtonEdit() {
    setStatus("edit");
  }

  function handleButtonNew() {
    setStatus("new");
    formMethods.reset(dataClear);
  }

  function handleButtonDel() {
    setStatus("view");
    dataDel.mutate({ id });
  }

  function handleButtonSave() {
    setStatus("view");
    if (status === "edit")
      dataUpdate.mutate({ id, data: formMethods.getValues() });
    if (status === "new") dataCreate.mutate({ data: formMethods.getValues() });
  }

  const onSubmitHandler = (values: any) => {
    console.log(`Submitted`);
    console.log(values);
  };

  return (
    <section className={"mt-2"}>
      {status === "view" ? (
        <div className={"flex justify-end"}>
          <Button
            className={"mr-4 w-24"}
            size="small"
            color="primary"
            onClick={handleButtonEdit}
            name="edit"
            data-testid="buttonEdit"
          >
            Editar
          </Button>
          <Button
            className={"mr-4 w-24"}
            size="small"
            color="secondary"
            onClick={handleButtonNew}
            name="new"
            data-testid="buttonNew"
          >
            Novo
          </Button>
          <Button
            className={"w-24"}
            size="small"
            color="secondary"
            onClick={handleButtonDel}
            name="del"
            data-testid="buttonDel"
          >
            Excluir
          </Button>
        </div>
      ) : null}
      <FormProvider {...formMethods}>
        <form
          className="form"
          onSubmit={formMethods.handleSubmit(onSubmitHandler)}
          autoComplete="off"
        >
          <div className={"flex-wrap gap-2 sm:flex"}>
            {usuarioSchema.map((field) => (
              <React.Fragment key={field.name}>
                <Field
                  type="text"
                  {...field}
                  disabled={status === "view"}
                  key={field.name}
                />
              </React.Fragment>
            ))}
          </div>
        </form>
      </FormProvider>
      {status === "view" ? null : (
        <div className={"flex justify-end"}>
          {formMethods.formState.isDirty ? (
            <Button
              className={"mr-4 w-24"}
              size="small"
              color="primary"
              onClick={handleButtonSave}
              name="save"
              data-testid="buttonSave"
            >
              Salvar
            </Button>
          ) : null}
          <Button
            className={"w-24"}
            size="small"
            color="secondary"
            onClick={handleButtonCancel}
            name="cancel"
            data-testid="buttonCancel"
          >
            Cancelar
          </Button>
        </div>
      )}
    </section>
  );
}
