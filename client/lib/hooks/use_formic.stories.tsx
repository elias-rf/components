import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from "../../components/form";
import { Textbox } from "../../components/textbox";
import { useFormic } from "./use_formic";

export default {
  title: "Hooks/useFormic",
  component: Textbox,
  argTypes: { onClick: { action: "onClick" } },
} as ComponentMeta<typeof Textbox>;

export const Default: ComponentStory<typeof Textbox> = () => {
  const formic = useFormic({
    initialValues: { nome: "", idade: "10", habilitado: true },
    onSubmit: (values) => console.log(values),
  });
  return (
    <div className="flex flex-col space-x-2 space-y-2">
      <div>
        <Textbox
          name="nome"
          value={formic.values.nome}
          onChangeEvent={formic.handleChange}
        />
        <Textbox
          name="idade"
          value={formic.values.idade}
          onChangeEvent={formic.handleChange}
        />
        <Checkbox
          name="habilitado"
          value={formic.values.habilitado}
          onChangeEvent={formic.handleChange}
        />
      </div>

      <div>{JSON.stringify(formic.values)}</div>
    </div>
  );
};
