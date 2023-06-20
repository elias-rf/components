export const Comment = ({ children }: { children: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: `<!-- ${children} -->` }} />;
};
