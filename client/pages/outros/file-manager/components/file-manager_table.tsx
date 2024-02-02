import { BreadCrumb } from '@/client/components/bread-crumb/bread-crumb.js'
import { cn } from '@/client/lib/utils.js'
import { fileManagerStore } from '@/client/pages/outros/file-manager/components/file-manager_store.js'
import { useQuery } from '@tanstack/react-query'

/**
 * Agenda de Ramais
 */
export function FileManagerTable() {
  const path = fileManagerStore.state((state) => state.path)
  const selected = fileManagerStore.state((state) => state.selected)

  const queryFiles = useQuery({
    queryKey: ['fileManager', { path }],
    queryFn: () => fileManagerStore.fetchDir(path),
  })

  const queryStat = useQuery({
    queryKey: ['fileManager', { path, selected }],
    queryFn: () => fileManagerStore.fetchStat(path, selected),
  })

  function handleDir(name: string) {
    fileManagerStore.setSelected('')
    if (path === '') {
      fileManagerStore.setPath(name)
    } else {
      fileManagerStore.setPath(path + '/' + name)
    }
  }

  function handleFile(name: string) {
    fileManagerStore.setSelected(name)
  }

  function handlePath(path: string) {
    fileManagerStore.setPath(path)
    fileManagerStore.setSelected('')
  }

  return (
    <div data-name="fileManager">
      <BreadCrumb onClick={handlePath}>
        <BreadCrumb.Item path="">Home</BreadCrumb.Item>
        {path.split('/').map((row, index) => (
          <BreadCrumb.Item
            key={row}
            path={path
              .split('/')
              .slice(0, index + 1)
              .join('/')}
          >
            {row}
          </BreadCrumb.Item>
        ))}
      </BreadCrumb>
      {queryFiles.data &&
        queryFiles.data.dir.map((row) => (
          <div
            key={row.name}
            className="cursor-pointer"
            onClick={() => handleDir(row.name)}
          >
            [{row.name}]
          </div>
        ))}
      {queryFiles.data &&
        queryFiles.data.file.map((row) => (
          <div
            key={row.name}
            className={cn('cursor-pointer', {
              'bg-gray-100 text-blue-700': row.name === selected,
            })}
            onClick={() => handleFile(row.name)}
          >
            {row.name}
          </div>
        ))}
      {selected ? (
        <div className="mt-4 flex flex-col">
          <div>Nome: {selected}</div>
          <div>Tamanho: {queryStat.data?.hsize}</div>
          <div>Data: {queryStat.data?.mtime.toString()}</div>
        </div>
      ) : null}
    </div>
  )
}
