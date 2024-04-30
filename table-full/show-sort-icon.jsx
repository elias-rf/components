export function ShowSortIcon({ col, orderBy }) {
  if (col.sortable === false || !orderBy) return null
  if (orderBy.length > 0 && orderBy[0][0] === col.name) {
    if (orderBy[0][1] === 'asc')
      return <span className="text-gray-400">{'🡑'}</span>
    if (orderBy[0][1] === 'desc')
      return <span className="text-gray-400">{'🡓'}</span>
  }
  return <span className="text-gray-300">{'⇅'}</span>
}
