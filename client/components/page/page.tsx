import { TPageProps } from "./page.types";

export function Page(props: TPageProps) {
  const { children } = props;
  return <section className={"flex flex-col mx-2 my-1"}>{children}</section>;
}
