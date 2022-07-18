import { ShowSortableIcon } from "./show-sortable-icon";

const story = {
  title: "Componentes/ShowSortableIcon",
  component: ShowSortableIcon,
};

const schema = {
  field: "id",
  sortable: true,
};

export const Descendente = () => (
  <ShowSortableIcon
    order={[{ id: "desc" }]}
    fieldSchema={schema}
  />
);
export const Ascendente = () => (
  <ShowSortableIcon
    order={[{ id: "asc" }]}
    fieldSchema={schema}
  />
);
export const NaoSelecionado = () => (
  <ShowSortableIcon
    order={[{ lx: "desc" }]}
    fieldSchema={schema}
  />
);

export const NaoSelecionavel = () => (
  <ShowSortableIcon order={[{ id: "desc" }]} />
);

export default story;
