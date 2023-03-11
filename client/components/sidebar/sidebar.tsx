export function Sidebar({ children }: any) {
  return (
    <aside
      className={"w-64"}
      aria-label="Sidebar"
    >
      <div
        className={
          "px-1 py-2 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800"
        }
      >
        <ul className={"space-y-2"}>{children}</ul>
      </div>
    </aside>
  );
}
