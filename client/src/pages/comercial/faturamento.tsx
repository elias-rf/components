import { Page, PageTitle } from "../../components";
import { Auth } from "../../features/auth";
import { Vendas } from "../../features/vendas/vendas/vendas";

export default function Faturamento() {
  return (
    <Auth>
      <Page>
        <PageTitle
          title="Faturamento"
          loading={false}
        />
        <Vendas />
      </Page>
    </Auth>
  );
}
