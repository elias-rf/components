import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PrecosCliente } from "./precos_cliente";

export default {
  title: "Features/Precos",
  component: PrecosCliente,
  argTypes: { onClick: { action: "onClick" }, onClose: { action: "onClose" } },
} as ComponentMeta<typeof PrecosCliente>;

export const Default: ComponentStory<typeof PrecosCliente> = () => {
  return <PrecosCliente />;
};
