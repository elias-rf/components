import { TClienteIds } from "@/models/cliente/cliente.type";
import type { TFieldDef } from "@/types";
import { recordClear } from "@/utils/schema/record-clear";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Field } from "../../components/field";
import { clienteSchema } from "./cliente.schema";

type TClienteFormProps = {
  id: TClienteIds;
};

type TStatus = "edit" | "new" | "view";
const dataClear = recordClear(clienteSchema);

export function ClienteForm({ id }: TClienteFormProps) {
  const dataRead = trpc.cliente.read.useQuery({ id });
  const [status, setStatus] = React.useState<TStatus>("new");
  const formMethods = useForm({ defaultValues: dataClear });

  React.useEffect(() => {
    if (dataRead.data && dataRead.data.agenda_telefone_id) {
      formMethods.reset(dataRead.data);
      setStatus("view");
    }
  }, [dataRead.data]);

  const onSubmitHandler = (values: any) => {
    console.log(`Submitted`);
    console.log(values);
  };

  return (
    <section className={"mt-2"}>
      <FormProvider {...formMethods}>
        <form
          className="form"
          onSubmit={formMethods.handleSubmit(onSubmitHandler)}
          autoComplete="off"
        ></form>
        <div className={"flex flex-col"}>
          <div className={"flex flex-wrap gap-2"}>
            {clienteSchema.map((field: TFieldDef) => (
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
        </div>
      </FormProvider>
    </section>
  );
}
