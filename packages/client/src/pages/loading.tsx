import DefaultLayout from "@/features/ui/default-layout";
import Page from "@/features/ui/page";
import PageTitle from "@/features/ui/page-title";

export default function Loading() {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current   rounded-full";

  return (
    <Page>
      <PageTitle
        title={"Aguarde..."}
        loading={true}
      ></PageTitle>
    </Page>
  );
}
