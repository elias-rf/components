import React from "react";
import { Page, PageTitle } from "../../components";
import { DataContext } from "../../contexts/data-context";
import { Auth } from "../../features/auth";
// import PermissaoService from "../../service/permissao.service";

export default function Permissoes() {
  const { clientKnex } = React.useContext(DataContext) as any;

  return (
    <Auth>
      <Page>
        <PageTitle title="Permissões" />
        <hr />
        {/* <MasterDetail
          schema={schema}
          list={list}
          read={read}
          create={create}
          del={del}
          clear={clear}
          searchable={false}
        /> */}
      </Page>
    </Auth>
  );
}
