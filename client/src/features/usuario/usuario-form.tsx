import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import type { Action, Id } from "../../../../types";
import { isEmpty } from "../../../../utils/src";
import { Button, Formfield } from "../../components";
import { UsuarioRecord, usuarioService } from "../../service/usuario.service";

type UsuarioFormProps = {
  selected: Id;
};

export function UsuarioForm({ selected }: UsuarioFormProps) {
  const queryClient = useQueryClient();
  const [form, setForm] = React.useState({} as UsuarioRecord);
  const [status, setStatus] = React.useState("new");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm();

  // leitura inicial do schema
  const schema = useQuery(
    ["usuarioSchema"],
    async () => usuarioService.schema(),
    { staleTime: Infinity }
  );

  // leitura inicial do registro
  const record = useQuery(
    ["usuario", selected],
    ({ queryKey }) => {
      const [_key, id] = queryKey as [string, Id];
      if (isEmpty(id)) return [];
      return usuarioService.read(id);
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  // atualiza o registro no formulário
  function showRecord(rec: any) {
    Object.entries(rec).forEach(([key, value]) => {
      setValue(key, value, { shouldDirty: false });
    });
    if (isEmpty(rec.id)) {
      setStatus("new");
    } else {
      setStatus("update");
    }
  }

  React.useEffect(() => {
    reset();
    if (record.data) {
      showRecord(record.data);
    }
  }, [record.data]);

  function handleDispatch(action: Action) {
    if (action.type === "CLICK") {
      if (action.payload.name === "novo") {
        showRecord(usuarioService.clear());
      }
      if (action.payload.name === "excluir") {
        recordDel.mutate([selected]);
        showRecord(usuarioService.clear());
      }
    }
  }

  const recordUpdate = useMutation(
    (args: [Id, UsuarioRecord]) => usuarioService.update(...args),
    { onSuccess: () => queryClient.invalidateQueries(["usuario"]) }
  );

  const recordCreate = useMutation(
    (args: [UsuarioRecord]) => usuarioService.create(...args),
    { onSuccess: () => queryClient.invalidateQueries(["usuario"]) }
  );

  const recordDel = useMutation((args: [Id]) => usuarioService.del(...args), {
    onSuccess: () => queryClient.invalidateQueries(["usuario"]),
  });

  const onSubmit = (data: any) => {
    if (status === "new") {
      recordCreate.mutate([data]);
      showRecord(usuarioService.clear());
    }
    if (status === "update") {
      recordUpdate.mutate([[data.id.toString()], data]);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2">
          <div className="space-x-2">
            <Button
              className="w-20 bg-green-300"
              dispatch={handleDispatch}
              name="novo"
              type="button"
            >
              Novo
            </Button>
            <Button
              className="w-20 bg-blue-300"
              dispatch={handleDispatch}
              name="salvar"
              disabled={!isDirty}
              type="submit"
            >
              Salvar
            </Button>
            <Button
              className="w-20 bg-red-300"
              dispatch={handleDispatch}
              name="excluir"
              disabled={isDirty}
              type="button"
            >
              Excluir
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {schema?.data?.fields.map((fld: any) => {
              return (
                <Formfield
                  key={fld.field}
                  label={fld.label}
                  {...register(fld.field)}
                  type={fld.type}
                />
              );
            })}
          </div>
        </div>
      </form>
    </>
  );
}
