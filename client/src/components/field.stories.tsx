import type { Story } from "@ladle/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Field } from "./field";

export default {
  title: "Form/Field",
  component: Field,
};

const Template: Story<typeof Field> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => setDisp(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field {...register("text1")} type="string" />
        <Field {...register("checkbox1")} type="boolean" />
        <button type="submit">Submit</button>
      </form>
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

export const Texto = Template.bind({});

Texto.args = {
  value: "valor",
  field: "textbox1",
  type: "string",
};
