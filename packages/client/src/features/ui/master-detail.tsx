import React from "react";
import { OrderBy, Where } from "../../..";
import Dataform from "./dataform";
import Datatable from "./datatable";

interface MasterDetailProps {
  read: (id: string[]) => Promise<any>;
  schema: () => Promise<any>;
  update?: (id: string[], data: any) => Promise<any>;
  del?: (id: string[]) => Promise<any>;
  create?: (data: any) => Promise<any>;
  clear: () => any;
  list: (where?: Where[], order?: OrderBy[]) => Promise<any>;
  searchable: boolean;
}

export default function MasterDetail({
  schema,
  list,
  read,
  update,
  create,
  del,
  clear,
  searchable,
}: MasterDetailProps) {
  return (
    <div>
      <Dataform
        schema={schema}
        read={read}
        update={update}
        create={create}
        del={del}
        clear={clear}
      />
      <Datatable
        schema={schema}
        list={list}
        searchable={searchable}
      />
    </div>
  );
}
