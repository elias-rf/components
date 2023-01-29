import type { Meta, StoryObj } from "@storybook/react";
import { ShowSortableIcon } from "./show-sortable-icon";

const meta: Meta<typeof ShowSortableIcon> = {
  title: "Components/Table/ShowSortableIcon",
  component: ShowSortableIcon,
};

export default meta;
type Story = StoryObj<typeof ShowSortableIcon>;

const schema = {
  name: "id",
  field: "cod",
  sortable: true,
};

export const Descendente: Story = {
  render: () => (
    <ShowSortableIcon
      order={[["id", "desc"]]}
      fieldSchema={schema}
    />
  ),
};
export const Ascendente: Story = {
  render: () => (
    <ShowSortableIcon
      order={[["id", "asc"]]}
      fieldSchema={schema}
    />
  ),
};
export const NaoSelecionado: Story = {
  render: () => (
    <ShowSortableIcon
      order={[["lx", "desc"]]}
      fieldSchema={schema}
    />
  ),
};

export const NaoSelecionavel: Story = {
  render: () => (
    <ShowSortableIcon
      order={[["id", "desc"]]}
      fieldSchema={{
        name: "id",
        sortable: false,
      }}
    />
  ),
};
