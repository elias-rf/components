import { Button } from '@/client/components/button/button.js'
import { Checkbox } from '@/client/components/checkbox/checkbox.js'
import { ShieldIcon } from '@/client/components/icons/shield-icon.js'
import { Label } from '@/client/components/label/label.js'
import { ListGroup } from '@/client/components/list-group/list-group.js'
import { Modal } from '@/client/components/ui-old/modal/modal.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { rpc } from '@/client/lib/rpc.js'
import { TGroupSubjectFields } from '@/core/group-subject/group-subject_controller.js'
import { TGroupFields } from '@/core/group/group_controller.js'
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
        orderBy: [['NomeGrupo', 'asc']],
      }) as unknown as Promise<TData<TGroupFields>[]>,
  })

  const groupSubjectList = useQuery({
    queryKey: ['groupSubject', groupCurrent],
    queryFn: () =>
      rpc.request('groupSubject_list', {
        where: [['idGroup', groupCurrent.toString()]],
      }) as unknown as Promise<TData<TGroupSubjectFields>[]>,
  })

  const queryClient = useQueryClient()
  const onCreate = useMutation({
    mutationFn: (permissionKey: string) => {
      return rpc.request('groupSubject_create', {
        data: {
          idGroup: groupCurrent,
          idSubject: permissionKey,
        },
      }) as unknown as Promise<TData<TGroupSubjectFields>>
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['groupSubject'],
      })
    },
  })
  const onDelete = useMutation({
    mutationFn: (permissionKey: string) => {
      return rpc.request('groupSubject_del', {
        where: [
          ['idSubject', permissionKey],
          ['idGroup', groupCurrent.toString()],
        ],
      }) as unknown as Promise<TData<TGroupSubjectFields>>
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['groupSubject'],
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
    // const data = await rpc.request('groupSubject_listPermissions', params)
    const data = groupSubjectList.data || []
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
        <div className="flex p-4 space-x-4">
          <div>
            <p>Grupos</p>
            {groupList.data?.map((group) => (
              <ListGroup
                key={group.kGrupo}
                className="overflow-y-auto max-h-96"
              >
                <ListGroup.Item
                  active={group.kGrupo === groupCurrent}
                  onClick={() => setGroupCurrent(group.kGrupo || 0)}
                >
                  {group.NomeGrupo}
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
                          groupSubjectList.data
                            ? groupSubjectList.data.findIndex(
                                (prm) =>
                                  permissions[permission].key === prm.idSubject
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
