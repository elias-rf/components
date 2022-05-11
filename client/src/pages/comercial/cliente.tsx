import ClienteList from "../../features/cliente/cliente-list";
import Authorization from "../../features/ui/authorization";
import PageTitle from "../../features/ui/page-title";
import Page from "../../features/ui/page";

export default function Cliente() {
  return (
    <Authorization>
      <Page>
        <PageTitle title="Cliente" />
        <hr />
        <ClienteList />
      </Page>
    </Authorization>
  );
}
