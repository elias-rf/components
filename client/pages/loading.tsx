import { Page } from "../components/page/page";
import { PageTitle } from "../components/page/page-title";

export function Loading() {
  return (
    <Page title="Loading">
      <PageTitle title={"Aguarde..."} loading={true}></PageTitle>
    </Page>
  );
}
