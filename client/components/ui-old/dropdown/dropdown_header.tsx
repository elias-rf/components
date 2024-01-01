export function DropdownHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      {children}
    </div>
  )
}
