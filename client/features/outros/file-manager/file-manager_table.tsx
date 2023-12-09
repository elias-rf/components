import { BreadCrumb } from '@/client/components/ui/bread-crumb.js'
import { fileManagerStore } from '@/client/features/outros/file-manager/file-manager_store.js'
import { cn } from '@/client/lib/cn.js'
import { usePageSize } from '@/client/store/page-size.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

/**
 * Agenda de Ramais
 */
export function FileManagerTable() {
  const pageHeight = usePageSize((state) => state.height * 0.7)

  const dirList = fileManagerStore.use.dirList()
  const fetchDir = fileManagerStore.use.fetchDir()
  const fetchStat = fileManagerStore.use.fetchStat()
  const fileList = fileManagerStore.use.fileList()
  const path = fileManagerStore.use.path()
  const selected = fileManagerStore.use.selected()
  const setPath = fileManagerStore.use.setPath()
  const setSelected = fileManagerStore.use.setSelected()
  const stat = fileManagerStore.use.stat()

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
            'text-blue-700 bg-gray-100': row.name === selected,
          })}
          onClick={() => handleFile(row.name)}
        >
          {row.name}
        </div>
      ))}
      {selected ? (
        <div className="flex flex-col mt-4">
          <div>Nome: {selected}</div>
          <div>Tamanho: {stat.hsize}</div>
          <div>Data: {stat.mtime}</div>
        </div>
      ) : null}
    </div>
  )
}
