import type { Meta, StoryObj } from "@storybook/react";
import { TrpcProvider } from "../trpc-provider";
import { AgendaTelefone } from "./agenda-telefone";

const meta: Meta<typeof AgendaTelefone> = {
  component: AgendaTelefone,
};

export default meta;
type Story = StoryObj<typeof AgendaTelefone>;

const ListState = () => {
  return (
    <TrpcProvider>
      <AgendaTelefone />
    </TrpcProvider>
  );
};

export const Agenda: Story = { render: () => <ListState /> };
