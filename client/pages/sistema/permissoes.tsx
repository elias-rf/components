import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page-title";
import { Auth } from "../../features/auth";
import { GroupSubjectForm } from "../../features/permissoes/group-subject-form";
import { GroupSubjectList } from "../../features/permissoes/group-subject-list";

export default function Permissoes() {
  return (
    <Auth>
      <Page title="Permissoes">
        <PageTitle title="Permissões" />
        <hr />
        <GroupSubjectForm />
        <GroupSubjectList />
      </Page>
    </Auth>
  );
}
