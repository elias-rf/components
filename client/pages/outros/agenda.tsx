import { Page } from "../../components/page";
import { PageTitle } from "../../components/page-title";
import { PhonebookForm } from "../../features/agenda-telefone/agenda-telefone-form";
import { PhonebookList } from "../../features/agenda-telefone/agenda-telefone-list";

/**
 * Agenda de Ramais
 */
export default function Agenda() {
  return (
    <Page title="Agenda">
      <PageTitle title="Agenda de Ramais" />
      <hr />
      <section className="flex flex-col gap-2">
        <PhonebookForm />
        <PhonebookList />
      </section>
    </Page>
  );
}
