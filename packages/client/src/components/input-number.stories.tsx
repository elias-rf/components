import type { Story } from "@ladle/react";
import React from "react";
import { useForm } from "react-hook-form";
import { InputNumber } from "./input-number";

export default {
  title: "Form/Input-Number",
  component: InputNumber,
};

export const Default: Story<typeof InputNumber> = (props: any) => {
  const [valor, setValor] = React.useState(3.4);
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <InputNumber
        value={valor}
        ref={ref}
        onChange={(e: any) => setValor(e.target.value)}
      />
      <div>{valor}</div>
      <div>{ref.current?.value}</div>
    </>
  );
};

export const FormHook: Story<typeof InputNumber> = (props: any) => {
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
        <InputNumber
          {...register("input1")}
          step={0.01}
        />
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
