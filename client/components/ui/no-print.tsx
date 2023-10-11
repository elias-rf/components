export function NoPrint({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-name="NoPrint"
      className="print:hidden"
    >
      {children}
    </div>
  )
}
