import type { Story } from "@ladle/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Select } from "./select";

export default {
  title: "Form/Select",
  component: Select,
};

const Template: Story<typeof Select> = (props: any) => {
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
        <Select {...register("select1")}>
          <option value={"opt1"}>Opt1</option>
          <option value={"opt2"}>Opt2</option>
          <option value={"opt3"}>Opt3</option>
        </Select>
        <button type="submit">Submit</button>
      </form>
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  value: "vlr1",
  field: "datalist1",
  options: [
    { title: "Valor 1", value: "vlr1" },
    { title: "Valor 2", value: "vlr2" },
  ],
  disabled: false,
};
