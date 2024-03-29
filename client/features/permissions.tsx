import { Button } from '@/client/components/button/button.js'
import { Checkbox } from '@/client/components/checkbox/checkbox.js'
import { ShieldIcon } from '@/client/components/icons/shield-icon.js'
import { Label } from '@/client/components/label/label.js'
import { ListGroup } from '@/client/components/list-group/list-group.js'
import { Modal } from '@/client/components/ui-old/modal/modal.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { rpc } from '@/client/lib/rpc.js'
import { TGrupoSujeitoDtoFields } from '@/data/oftalmo/grupo-sujeito/grupo-sujeito.type.js'
import { TGroupDtoFields } from '@/data/oftalmo/grupo/group.type.js'
import { TData, TPermissions } from '@/types/index.js'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

export function Permissions({
  permissions = {},
}: {
  permissions: TPermissions
}) {
  const [show, setShow] = useState(false)
  const [groupCurrent, setGroupCurrent] = useState(0)

  const groupList = useQuery({
    queryKey: ['group'],
    queryFn: () =>
      rpc.request('group_list', {
        orderBy: [['nome', 'asc']],
      }) as unknown as Promise<TData<TGroupDtoFields>[]>,
  })

  const grupoSujeitoList = useQuery({
    queryKey: ['grupoSujeito', groupCurrent],
    queryFn: () =>
      rpc.request('grupoSujeito_list', {
        where: [['grupoId', groupCurrent.toString()]],
      }) as unknown as Promise<TData<TGrupoSujeitoDtoFields>[]>,
  })

  const queryClient = useQueryClient()
  const onCreate = useMutation({
    mutationFn: (permissionKey: string) => {
      return rpc.request('grupoSujeito_create', {
        data: {
          grupoId: groupCurrent,
          sujeitoId: permissionKey,
        },
      }) as unknown as Promise<TData<TGrupoSujeitoDtoFields>>
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['grupoSujeito'],
      })
    },
  })
  const onDelete = useMutation({
    mutationFn: (permissionKey: string) => {
      return rpc.request('grupoSujeito_del', {
        where: [
          ['sujeitoId', permissionKey],
          ['grupoId', groupCurrent.toString()],
        ],
      }) as unknown as Promise<TData<TGrupoSujeitoDtoFields>>
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

  async function handlePermission(permission: string) {
    const permissionKey = permissions[permission].key
    if (groupCurrent === 0) {
      await confirm()
      return
    }
    const params = {
      idSubject: permissionKey,
      idGroup: groupCurrent.toString(),
    }
    // const data = await rpc.request('grupoSujeito_listPermissions', params)
    const data = grupoSujeitoList.data || []
    const exist =
      data.findIndex((prm: any) => permissionKey === prm.idSubject) !== -1
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
            {groupList.data?.map((group) => (
              <ListGroup
                key={group.id}
                className="max-h-96 overflow-y-auto"
              >
                <ListGroup.Item
                  active={group.id === groupCurrent}
                  onClick={() => setGroupCurrent(group.id || 0)}
                >
                  {group.nome}
                </ListGroup.Item>
              </ListGroup>
            ))}
          </div>
          <div>
            <p>Permissões</p>
            <ListGroup>
              {Object.keys(permissions).map((permission) => {
                return (
                  <ListGroup.Item
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
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </div>
        </div>
      </Modal>
      <MsgBox />
    </>
  )
}
