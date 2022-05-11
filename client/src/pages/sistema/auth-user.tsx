import React from "react";
import AuthUserService from "@/features/auth-user/auth-user.service";
import DataContext, { ClientContext } from "@/contexts/data-context";
import MasterDetail from "@/features/ui/master-detail";
import PageTitle from "@/features/ui/page-title";
import Page from "@/features/ui/page";
import Authorization from "@/features/ui/authorization";

export default function AuthUser() {
  const { clientKnex } = React.useContext(DataContext) as ClientContext;
  const { schema, list, read, update, create, del, clear } =
    AuthUserService(clientKnex);

  return (
    <Authorization>
      <Page>
        <PageTitle title="Cadastro de Usuários" />
        <hr />
        <MasterDetail
          schema={schema}
          list={list}
          read={read}
          update={update}
          create={create}
          del={del}
          clear={clear}
          searchable={false}
        />
      </Page>
    </Authorization>
  );
}
