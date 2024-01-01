export function LxItem({
  value,
  children,
}: {
  value: string
  children: React.ReactNode
}) {
  return <li id={value}>{children}</li>
}
