import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LabelError } from "../label_error";
import { Formfield } from "./formfield";
import { Label } from "./label";
import { Textbox } from "./textbox";

const meta: Meta<typeof Formfield> = {
  component: Formfield,
};

export default meta;
type Story = StoryObj<typeof Formfield>;

function FormfieldState() {
  const [vlr, setVlr] = React.useState("");
  return (
    <Formfield>
      <Label name="teste">Teste:</Label>
      <Textbox
        name="teste"
        value={vlr}
        onChangeEvent={(e) => setVlr(e.value)}
      />
      <LabelError>ERRO</LabelError>
    </Formfield>
  );
}

export const Default: Story = {
  render: () => <FormfieldState />,
};
