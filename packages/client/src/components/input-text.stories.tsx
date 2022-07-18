import type { Story } from "@ladle/react";
import React from "react";
import { useForm } from "react-hook-form";
import { InputText } from "./input-text";

export default {
  title: "Form/Input-Text",
  component: InputText,
};

export const Default: Story<typeof InputText> = (props: any) => {
  const [valor, setValor] = React.useState("");
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <InputText
        value={valor}
        ref={ref}
        onChange={(e: any) => setValor(e.target.value)}
      />
      <div>{valor}</div>
      <div>{ref.current?.value}</div>
    </>
  );
};

export const FormHook: Story<typeof InputText> = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [disp, setDisp] = React.useState({});
  const onSubmit = (data: any) => setDisp(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText {...register("input1")} />
        <button type="submit">Submit</button>
      </form>
      <div>{JSON.stringify(disp, null, 2)}</div>
    </>
  );
};

Default.args = {
  value: "valor",
  field: "textbox1",
  disabled: false,
};
