import React from "react";
import AuthService from "@/features/auth/auth.service";
import DataContext from "@/contexts/data-context";
import MasterDetail from "@/features/ui/master-detail";
import PageTitle from "@/features/ui/page-title";
import Page from "@/features/ui/page";
import Authorization from "@/features/ui/authorization";
import useQueryString from "../../lib/hooks/use-query-string";

export default function Auth() {
  const { clientKnex } = React.useContext(DataContext) as any;
  const { schema, list, read, create, del, clear } = AuthService(clientKnex);

  return (
    <Authorization>
      <Page>
        <PageTitle title="Autorizações" />
        <hr />
        <MasterDetail
          schema={schema}
          list={list}
          read={read}
          create={create}
          del={del}
          clear={clear}
          searchable={false}
        />
      </Page>
    </Authorization>
  );
}
