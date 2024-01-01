export function Title({ children }: { children: React.ReactNode }) {
  if (typeof children === 'string') document.title = `VT - ${children}`
  return <p className="text-2xl font-medium dark:text-gray-200">{children}</p>
}
