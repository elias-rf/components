import type { Story } from "@ladle/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./input";

export default {
  title: "Form/Input",
  component: Input,
};

const Template: Story<typeof Input> = (props: any) => {
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
        <Input {...register("input1")} />
        <Input
          {...register("number1")}
          type="number"
          step={0.01}
          lang="pt-BR"
        />
        <Input
          {...register("number2")}
          type="text"
          pattern={"[0-9]+([,][0-9]{1,2})?"}
        />
        <Input
          {...register("checkbox1")}
          type="checkbox"
        />
        <Input
          {...register("color1")}
          type="color"
        />
        <Input
          {...register("date1")}
          type="date"
        />
        <Input
          {...register("email1")}
          type="email"
        />
        <Input
          {...register("password1")}
          type="password"
        />
        <Input
          {...register("radio1")}
          type="radio"
        />
        <Input
          {...register("range1")}
          type="range"
        />
        <Input
          {...register("time1")}
          type="time"
        />
        <button type="submit">Submit</button>
      </form>
      <div>{JSON.stringify(disp, null, 2)}</div>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  value: "valor",
  field: "textbox1",
  disabled: false,
};
