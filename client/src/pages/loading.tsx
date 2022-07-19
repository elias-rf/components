import { Page, PageTitle } from "../components";

export function Loading() {
  return (
    <Page>
      <PageTitle
        title={"Aguarde..."}
        loading={true}
      ></PageTitle>
    </Page>
  );
}
