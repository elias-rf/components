import { BreadCrumb } from '@/client/components/ui-old/bread-crumb.js'
import { cn } from '@/client/lib/utils.js'
import { fileManagerStore } from '@/client/pages/outros/file-manager/file-manager_store.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'

/**
 * Agenda de Ramais
 */
export function FileManagerTable() {
  const { dirList, fileList, path, selected, stat } = useSnapshot(
    fileManagerStore.state
  )
  const fetchDir = fileManagerStore.fetchDir
  const fetchStat = fileManagerStore.fetchStat
  const setPath = fileManagerStore.setPath
  const setSelected = fileManagerStore.setSelected

  useEffect(() => {
    toast.promise(
      fetchDir(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar lista de arquivos!',
      },
      {
        id: 'agenda-telefone-table',
      }
    )
  }, [path])

  useEffect(() => {
    if (selected) {
      toast.promise(
        fetchStat(),
        {
          loading: 'lendo...',
          success: 'sucesso!',
          error: 'Erro ao carregar dados do arquivo!',
        },
        {
          id: 'agenda-telefone-table',
        }
      )
    }
  }, [selected])

  function handleDir(name: string) {
    setSelected('')
    if (path === '') {
      setPath(name)
    } else {
      setPath(path + '/' + name)
    }
  }

  function handleFile(name: string) {
    setSelected(name)
  }

  function handlePath(path: string) {
    setPath(path)
    setSelected('')
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
      {dirList.map((row) => (
        <div
          key={row.name}
          className="cursor-pointer"
          onClick={() => handleDir(row.name)}
        >
          [{row.name}]
        </div>
      ))}
      {fileList.map((row) => (
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
          <div>Tamanho: {stat.hsize}</div>
          <div>Data: {stat.mtime}</div>
        </div>
      ) : null}
    </div>
  )
}
