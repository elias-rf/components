import { Page } from "../../components/page";
import { PageTitle } from "../../components/page-title";
import { PhonebookForm } from "../../features/phonebook/phonebookForm";
import { PhonebookList } from "../../features/phonebook/phonebookList";

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
