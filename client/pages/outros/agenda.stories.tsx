import type { Meta, StoryObj } from "@storybook/react";
import Agenda from "./agenda";

const meta: Meta<typeof Agenda> = {
  component: Agenda,
};

export default meta;
type Story = StoryObj<typeof Agenda>;

export const Default: Story = {};
