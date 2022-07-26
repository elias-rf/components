import { Action, OrderBy, Where } from "../../../../types";
import { Page, PageTitle, tableActionTypes } from "../../components";
import { Auth } from "../../features/auth";
import { UsuarioForm } from "../../features/usuario/usuario-form";
import { UsuarioList } from "../../features/usuario/usuario-list";
import { useQueryState } from "../../lib/hooks/use-query-state";

export default function Usuarios() {
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
    <Auth>
      <Page>
        <PageTitle title="Cadastro de Usuários" />
        <hr />
        <div className="flex flex-col gap-2">
          <UsuarioForm selected={selected} />
          <UsuarioList
            dispatch={handleDispatch}
            selected={selected}
            orderBy={orderBy}
            where={where}
          />
        </div>
      </Page>
    </Auth>
  );
}
