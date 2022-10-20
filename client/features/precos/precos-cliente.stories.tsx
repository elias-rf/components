import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PrecosCliente } from "./precos-cliente";

export default {
  title: "Features/Precos Cliente",
  component: PrecosCliente,
  argTypes: { onClick: { action: "onClick" }, onClose: { action: "onClose" } },
} as ComponentMeta<typeof PrecosCliente>;

export const Default: ComponentStory<typeof PrecosCliente> = () => {
  return <PrecosCliente />;
};
