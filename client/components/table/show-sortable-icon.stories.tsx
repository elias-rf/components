import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ShowSortableIcon } from "./show-sortable-icon";

export default {
  title: "Components/Table/ShowSortableIcon",
  component: ShowSortableIcon,
} as ComponentMeta<typeof ShowSortableIcon>;

const schema = {
  name: "id",
  field: "cod",
  sortable: true,
};

export const Descendente: ComponentStory<typeof ShowSortableIcon> = () => (
  <ShowSortableIcon order={[["id", "desc"]]} fieldSchema={schema} />
);
export const Ascendente: ComponentStory<typeof ShowSortableIcon> = () => (
  <ShowSortableIcon order={[["id", "asc"]]} fieldSchema={schema} />
);
export const NaoSelecionado: ComponentStory<typeof ShowSortableIcon> = () => (
  <ShowSortableIcon order={[["lx", "desc"]]} fieldSchema={schema} />
);

export const NaoSelecionavel = () => (
  <ShowSortableIcon
    order={[["id", "desc"]]}
    fieldSchema={{
      name: "id",
      sortable: false,
    }}
  />
);
