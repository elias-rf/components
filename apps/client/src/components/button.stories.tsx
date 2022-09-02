import type { Story } from "@ladle/react";
import React from "react";
import { Button } from "./button";

export default {
  title: "Button",
  component: Button,
  argTypes: { dispatch: { action: "dispatch" } },
};

export const Default: Story<typeof Button> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <Button
        {...props}
        onClick={(e) => setDisp([e.name, e.eventName])}
      />
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

Default.args = {
  name: "Botão1",
  disabled: false,
  children: `Botão1`,
};

export const Class: Story<typeof Button> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <Button
        {...props}
        onClick={(e) => setDisp([e.name, e.eventName, e.targetProps])}
      />
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

Class.args = {
  name: "Botão1",
  className: "bg-green-600",
  disabled: false,
  children: `Botão1`,
};
