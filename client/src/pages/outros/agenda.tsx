import type { Action, OrderBy, Where } from "../../../../types";
import { Page, PageTitle, tableActionTypes } from "../../components";
import { PhonebookForm } from "../../features/phonebook/phonebookForm";
import { PhonebookList } from "../../features/phonebook/phonebookList";
import { useQueryState } from "../../lib/hooks/use-query-state";

/**
 * Agenda de Ramais
 */
function Agenda() {
  const [selected, setSelected] = useQueryState("selected", []);
  const [orderBy, setOrderBy] = useQueryState("orderBy", []);
  const [where, setWhere] = useQueryState("where", []);

  function handleDispatch(action: Action) {
    switch (action.type) {
      case tableActionTypes.select:
        setSelected(action.payload);
        break;
      case tableActionTypes.order:
        setOrderBy(action.payload as OrderBy[]);
        break;
      case tableActionTypes.where:
        setWhere(action.payload as Where[]);
        break;
    }
  }

  return (
    <Page>
      <PageTitle title="Agenda de Ramais" />
      <hr />
      <div className="flex flex-col gap-2">
        <PhonebookForm selected={selected} />
        <PhonebookList
          dispatch={handleDispatch}
          selected={selected}
          orderBy={orderBy}
          where={where}
        />
      </div>
    </Page>
  );
}

export default Agenda;
