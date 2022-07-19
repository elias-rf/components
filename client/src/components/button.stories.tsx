import type { Story } from "@ladle/react";
import React from "react";
import { Button } from "./button";

export default {
  title: "Button",
  component: Button,
  argTypes: { dispatch: { action: "dispatch" } },
};

const Template: Story<typeof Button> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <Button {...props} dispatch={setDisp} />
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  name: "Botão1",
  disabled: false,
  children: `Botão1`,
};

export const Class: Story<typeof Button> = Template.bind({});

Class.args = {
  name: "Botão1",
  className: "bg-green-600",
  disabled: false,
  children: `Botão1`,
};
