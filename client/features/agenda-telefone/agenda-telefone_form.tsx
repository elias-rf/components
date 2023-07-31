import { FormJson } from "@/client/components/inputs";
import { TFormStatus } from "@/types";
import { UseFormReturn } from "react-hook-form";

type TAgendaTelefoneFormProps = {
  form: UseFormReturn<any>;
  status: TFormStatus;
};

export const AgendaTelefoneForm = ({
  form,
  status,
}: TAgendaTelefoneFormProps) => {
  const fields = [
    {
      name: "agenda_telefone_id",
      component: "TextField",
      label: "Ramal",
      defaultValue: " ",
      required: true,
      disabled: status === "view",
      xs: 12,
      sm: 2,
      lg: 1,
    },
    {
      name: "nome",
      component: "TextField",
      label: "Nome",
      defaultValue: " ",
      required: true,
      disabled: status === "view",
      xs: 12,
      sm: 10,
      lg: 5,
    },
    {
      name: "setor",
      component: "TextField",
      label: "Setor",
      defaultValue: " ",
      disabled: status === "view",
      xs: 12,
      sm: 4,
      lg: 2,
    },
    {
      name: "email",
      component: "TextField",
      label: "Email",
      defaultValue: " ",
      disabled: status === "view",
      xs: 12,
      sm: 8,
      lg: 4,
    },
  ];

  return (
    <>
      <FormJson
        form={form}
        fields={fields}
      />
    </>
  );
};
