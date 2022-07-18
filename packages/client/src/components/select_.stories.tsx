import type { Story } from "@ladle/react";
import React from "react";
import { SelectForm } from "./select";

export default {
  title: "Select",
  component: SelectForm,
  argTypes: { dispatch: { action: "dispatch" } },
};

const Template: Story<typeof SelectForm> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <SelectForm {...props} dispatch={setDisp} />
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
