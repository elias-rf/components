import type { Meta, StoryObj } from "@storybook/react";
import {
  IconBoxMultiple,
  IconBuildingFactory2,
  IconBuildingStore,
  IconShieldLock,
} from "@tabler/icons-react";
import React from "react";
import { LayoutDefault } from "./layout-default";
import { TSidebarItem } from "./sidebar.type";

const menu: TSidebarItem[] = [
  {
    label: "Comercial",
    icon: (
      <IconBuildingStore
        size="1rem"
        stroke={1}
      />
    ),
    items: [
      {
        label: "Calculadora de preços",
        to: "/comercial/calculadora",
        items: [
          { label: "Calculadora de preços", to: "/comercial/calculadora1" },
          { label: "Vendas 30 dias", to: "/comercial/venda1" },
          { label: "Clientes", to: "/comercial/cliente1" },
        ],
      },
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

const meta: Meta<typeof LayoutDefault> = {
  component: LayoutDefault,
  argTypes: { onClick: { action: "onClick" } },
};

export default meta;
type Story = StoryObj<typeof LayoutDefault>;

const DefaultStory = (props: any) => {
  const [path, setPath] = React.useState("/main");
  return (
    <LayoutDefault
      {...props}
      path={path}
      onClick={(e: string) => setPath(e)}
    >
      Página de dados - {path}
      <button onClick={() => setPath("/comercial/cliente")}>
        GO /comercial/cliente
      </button>
    </LayoutDefault>
  );
};

export const Default: Story = {
  render: (props: any) => <DefaultStory {...props} />,
};

Default.args = {
  children: `Página 1`,
  menu,
  path: "/main",
};
