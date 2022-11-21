import { Page } from "../components/page/page";
import { PageTitle } from "../components/page/page_title";

export function Loading() {
  return (
    <Page>
      <PageTitle title={"Aguarde..."} loading={true}></PageTitle>
    </Page>
  );
}
