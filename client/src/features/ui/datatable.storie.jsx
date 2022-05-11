import Datatable from "./datatable";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const story = {
  title: "Componentes/Datatable",
  component: Datatable,
};

export default story;

function getList(where, order) {
  let data = [
    { id: 1, nome: "fulano", compra: 1.5 },
    { id: 2, nome: "beltrano", compra: 2.4 },
    { id: 3, nome: "cicrano", compra: 3.14 },
  ];
  return Promise.resolve(data);
}
function getSchema() {
  const schema = {
    pk: ["id"],
    fields: [
      {
        label: "ID",
        field: "id",
        type: "ID",
        labelClass: "text-left",
        fieldClass: "text-left",
      },
      {
        label: "Nome",
        field: "nome",
        labelClass: "text-center",
        fieldClass: "text-center",
        sortable: false,
      },
      {
        label: "Valor de compra",
        field: "compra",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
    ],
  };
  return Promise.resolve(schema);
}

export const Simples = () => {
  return (
    <BrowserRouter>
      Data
      <Datatable
        list={getList}
        schema={getSchema}
        searchable={false}
      />
    </BrowserRouter>
  );
};

// export const Searchable = () => {
//     return (
//         <BrowserRouter>
//             <Datatable
//                 onList={getList}
//                 onSchema={getSchema}
//                 searchable={true}
//             />
//         </BrowserRouter>
//     );
// };
