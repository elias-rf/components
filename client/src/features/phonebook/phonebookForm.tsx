import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import type { Action, Id } from "../../../../types";
import { isEmpty } from "../../../../utils";
import { Button, Formfield } from "../../components";
import {
  PhonebookRecord,
  phonebookService,
} from "../../service/phonebook.service";

type PhonebookFormProps = {
  selected: Id;
};

export function PhonebookForm({ selected }: PhonebookFormProps) {
  const queryClient = useQueryClient();
  const [form, setForm] = React.useState({} as PhonebookRecord);
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
    ["phonebookSchema"],
    async () => phonebookService.schema(),
    { staleTime: Infinity }
  );

  // leitura inicial do registro
  const record = useQuery(
    ["phonebook", selected],
    ({ queryKey }) => {
      const [_key, id] = queryKey as [string, Id];
      if (isEmpty(id)) return [];
      return phonebookService.read(id);
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
        showRecord(phonebookService.clear());
      }
      if (action.payload.name === "excluir") {
        recordDel.mutate([selected]);
        showRecord(phonebookService.clear());
      }
    }
  }

  const recordUpdate = useMutation(
    (args: [Id, PhonebookRecord]) => phonebookService.update(...args),
    { onSuccess: () => queryClient.invalidateQueries(["phonebook"]) }
  );

  const recordCreate = useMutation(
    (args: [PhonebookRecord]) => phonebookService.create(...args),
    { onSuccess: () => queryClient.invalidateQueries(["phonebook"]) }
  );

  const recordDel = useMutation((args: [Id]) => phonebookService.del(...args), {
    onSuccess: () => queryClient.invalidateQueries(["phonebook"]),
  });

  const onSubmit = (data: any) => {
    if (status === "new") {
      recordCreate.mutate([data]);
      showRecord(phonebookService.clear());
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
