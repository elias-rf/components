import type { Meta, StoryObj } from "@storybook/react";
import { AgendaTelefone } from "./agenda-telefone";

const meta: Meta<typeof AgendaTelefone> = {
  component: AgendaTelefone,
};

export default meta;
type Story = StoryObj<typeof AgendaTelefone>;

const ListState = () => {
  return <AgendaTelefone />;
};

export const Agenda: Story = { render: () => <ListState /> };
