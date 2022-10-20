import type { Story } from "@ladle/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Formfield } from "./formfield";

export default {
  title: "Form/Formfield",
  component: Formfield,
};

const Template: Story<typeof Formfield> = () => {
  const [disp, setDisp] = React.useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => setDisp(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Formfield
          {...register("text1", {
            required: "requerido",
            minLength: { value: 3, message: "muito pequeno" },
          })}
          error={errors.text1?.message}
          type="string"
        />
        <Formfield
          {...register("checkbox1")}
          error={errors.checkbox1}
          type="boolean"
        />
        <button type="submit">Submit</button>
      </form>
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

export const Texto = Template.bind({});

Texto.args = {
  value: "valor",
  schema: { field: "textbox", label: "Textbox", type: "string" },
};
