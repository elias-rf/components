export type TPageTitleProps = {
  title: string;
  loading?: boolean;
  children?: React.ReactNode;
};

export type TPageProps = {
  children: React.ReactNode;
};

export function Page({ children }: TPageProps) {
  return <section className={"mx-2 my-1 flex flex-col"}>{children}</section>;
}
