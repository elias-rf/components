import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { Button } from '../components_/button/button.jsx'
import { Checkbox } from '../components_/checkbox/checkbox.jsx'
import { ShieldIcon } from '../components_/icons/shield-icon.jsx'
import { Label } from '../components_/label/label.jsx'
import { ListGrupo } from '../components_/list-grupo/list-grupo.jsx'
import { Modal } from '../components_/ui-old/modal/modal.jsx'
import { useMessageBox } from '../lib/hooks/use-message-box.jsx'
import { rpc } from '../lib/rpc.mjs'

export function Permissions({ permissions = {} }) {
  const [show, setShow] = useState(false)
  const [grupoCurrent, setGrupoCurrent] = useState(0)

  const grupoList = useQuery({
    queryKey: ['grupo'],
    queryFn: () =>
      rpc.request('grupo_list', {
        orderBy: [['nome', 'asc']],
      }),
  })

  const grupoSujeitoList = useQuery({
    queryKey: ['grupoSujeito', grupoCurrent],
    queryFn: () =>
      rpc.request('grupoSujeito_list', {
        where: [['grupoId', grupoCurrent.toString()]],
      }),
  })

  const queryClient = useQueryClient()
  const onCreate = useMutation({
    mutationFn: (permissionKey) => {
      return rpc.request('grupoSujeito_create', {
        data: {
          grupoId: grupoCurrent,
          sujeitoId: permissionKey,
        },
      })
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['grupoSujeito'],
      })
    },
  })
  const onDelete = useMutation({
    mutationFn: (permissionKey) => {
      return rpc.request('grupoSujeito_del', {
        where: [
          ['sujeitoId', permissionKey],
          ['grupoId', grupoCurrent.toString()],
        ],
      })
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['grupoSujeito'],
      })
    },
  })

  const { MsgBox, confirm } = useMessageBox({
    title: 'Escolha um grupo',
    message: 'Um grupo deve ser escolhido anter de definir as permissões',
    option1: 'Ok',
  })

  async function handlePermission(permission) {
    const permissionKey = permissions[permission].key
    if (grupoCurrent === 0) {
      await confirm()
      return
    }
    const params = {
      idSubject: permissionKey,
      idGrupo: grupoCurrent.toString(),
    }
    // const data = await rpc.request('grupoSujeito_listPermissions', params)
    const data = grupoSujeitoList.data || []
    const exist =
      data.findIndex((prm) => permissionKey === prm.idSubject) !== -1
    if (exist) {
      await onDelete.mutateAsync(permissionKey)
    } else {
      await onCreate.mutateAsync(permissionKey)
    }
  }

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setShow(true)}
        size="icon"
      >
        <ShieldIcon />
      </Button>
      <Modal
        onClose={() => setShow(false)}
        show={show}
        title="Segurança"
      >
        <div className="flex space-x-4 p-4">
          <div>
            <p>Grupos</p>
            {grupoList.data?.map((grupo) => (
              <ListGrupo
                key={grupo.id}
                className="max-h-96 overflow-y-auto"
              >
                <ListGrupo.Item
                  active={grupo.id === grupoCurrent}
                  onClick={() => setGrupoCurrent(grupo.id || 0)}
                >
                  {grupo.nome}
                </ListGrupo.Item>
              </ListGrupo>
            ))}
          </div>
          <div>
            <p>Permissões</p>
            <ListGrupo>
              {Object.keys(permissions).map((permission) => {
                return (
                  <ListGrupo.Item
                    key={permission}
                    onClick={() => handlePermission(permission)}
                  >
                    <div className="flex flex-row items-center gap-x-2">
                      <Checkbox
                        id={permission}
                        checked={
                          grupoSujeitoList.data
                            ? grupoSujeitoList.data.findIndex(
                                (prm) =>
                                  permissions[permission].key === prm.sujeitoId
                              ) !== -1
                            : false
                        }
                      />
                      <Label
                        className="align-middle"
                        htmlFor={permission}
                      >
                        {permissions[permission].description}
                      </Label>
                    </div>
                  </ListGrupo.Item>
                )
              })}
            </ListGrupo>
          </div>
        </div>
      </Modal>
      <MsgBox />
    </>
  )
}
