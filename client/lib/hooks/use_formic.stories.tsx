import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../components/form";
import { Textbox } from "../../components/textbox";
import { useFormic } from "./use_formic";

const meta: Meta<typeof Textbox> = {
  component: Textbox,
  argTypes: { onClick: { action: "onClick" } },
};

export default meta;
type Story = StoryObj<typeof Textbox>;

function TextboxFormic() {
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
}

export const Default: Story = {
  render: () => <TextboxFormic />,
};
