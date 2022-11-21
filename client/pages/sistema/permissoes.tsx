import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { Auth } from "../../features/auth";
import { GroupSubjectForm } from "../../features/permissoes/group_subject_form";
import { GroupSubjectList } from "../../features/permissoes/group_subject_list";

export default function Permissoes() {
  return (
    <Auth>
      <Page>
        <PageTitle title="Permissões" />
        <hr />
        <GroupSubjectForm />
        <GroupSubjectList />
      </Page>
    </Auth>
  );
}
