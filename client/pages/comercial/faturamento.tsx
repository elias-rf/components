import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { Auth } from "../../features/auth";
import { Vendas } from "../../features/vendas/vendas/vendas";

export default function Faturamento() {
  return (
    <Auth>
      <Page>
        <PageTitle title="Faturamento" loading={false} />
        <Vendas />
      </Page>
    </Auth>
  );
}
