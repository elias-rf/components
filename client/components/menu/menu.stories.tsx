import type { Meta, StoryObj } from "@storybook/react";
import {
  IconBoxMultiple,
  IconBuildingFactory2,
  IconBuildingStore,
  IconShieldLock,
} from "@tabler/icons-react";
import { MenuComponent } from "./menu";

const meta: Meta<typeof MenuComponent> = {
  component: MenuComponent,
  argTypes: { onClick: { action: "onClick" } },
};

const menu = [
  {
    label: "Comercial",
    icon: (
      <IconBuildingStore
        size="1rem"
        stroke={1}
      />
    ),
    items: [
      { label: "Calculadora de preços", to: "/comercial/calculadora" },
      { label: "Vendas 30 dias", to: "/comercial/venda" },
      { label: "Clientes", to: "/comercial/cliente" },
    ],
  },
  {
    label: "Industrial",
    icon: (
      <IconBuildingFactory2
        size="1rem"
        stroke={1}
      />
    ),
    items: [
      { label: "Controles de produção", to: "/industrial/controle" },
      { label: "Transferência", to: "/industrial/transferencia" },
    ],
  },
  {
    label: "Sistema",
    icon: (
      <IconShieldLock
        size="1rem"
        stroke={1}
      />
    ),
    items: [
      { label: "Usuários", to: "/sistema/usuario" },
      { label: "Permissões", to: "/sistema/permissao" },
    ],
  },
  {
    label: "Outros",
    icon: (
      <IconBoxMultiple
        size="1rem"
        stroke={1}
      />
    ),
    items: [{ label: "Agenda de ramais", to: "/outros/agenda" }],
  },
];

export default meta;
type Story = StoryObj<typeof MenuComponent>;

const MenuComponentStory = (args: any) => {
  function handleOnClickEvent(event: string) {
    args.onClickEvent(event);
  }

  return (
    <>
      <MenuComponent
        menu={menu}
        onClick={handleOnClickEvent}
      ></MenuComponent>
    </>
  );
};

export const Default: Story = {
  render: () => <MenuComponentStory />,
};
