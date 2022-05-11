import PageTitle from "@/features/ui/page-title";
import Page from "@/features/ui/page";

import Phonebook from "@/features/phonebook/phonebook";

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
function Agenda() {
  return (
    <Page>
      <PageTitle title="Agenda de Ramais" />
      <hr />
      <Phonebook />
    </Page>
  );
}

export default Agenda;
