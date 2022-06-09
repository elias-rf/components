import Page from "@/features/ui/page";
import PageTitle from "@/features/ui/page-title";
import Authorization from "@/features/ui/authorization";

import EmProcess from "@/features/em-processo/em-processo";

export default function EmProcesso() {
  return (
    <Authorization>
      <Page>
        <PageTitle title={"Ordens em Processo"} />
        <EmProcess />
      </Page>
    </Authorization>
  );
}
