import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { LabelError } from "../label_error";
import { Formfield } from "./formfield";
import { Label } from "./label";
import { Textbox } from "./textbox";

export default {
  title: "Components/Form/Formfield",
  component: Formfield,
} as ComponentMeta<typeof Formfield>;

export const Default: ComponentStory<typeof Formfield> = () => {
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
};

Default.storyName = "Formfield";
