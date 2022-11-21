import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { Auth } from "../../features/auth";
import { Transferencia } from "../../features/transferencia/transferencia";

export default function IndustrialTransferencia() {
  return (
    <Auth>
      <Page>
        <PageTitle title="Transferência" />
        <Transferencia />
      </Page>
    </Auth>
  );
}
