import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page-title";
import { AgendaTelefoneForm } from "../../features/agenda-telefone/agenda-telefone-form";
import { AgendaTelefoneList } from "../../features/agenda-telefone/agenda-telefone-list";

/**
 * Agenda de Ramais
 */
export default function Agenda() {
  return (
    <Page title="Agenda">
      <PageTitle title="Agenda de Ramais" />
      <hr />
      <section className="flex flex-col gap-2">
        <AgendaTelefoneForm />
        <AgendaTelefoneList />
      </section>
    </Page>
  );
}
