type TPageProps = {
  children: React.ReactNode;
  title: string;
};

export function Page(props: TPageProps) {
  const { children, title = "" } = props;
  return (
    <section
      data-name={title}
      className="flex flex-col mx-2 my-1"
    >
      {children}
    </section>
  );
}
