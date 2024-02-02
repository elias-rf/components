import { Button } from '@/client/components/button/button.js'
import { Checkbox } from '@/client/components/checkbox/checkbox.js'
import { ShieldIcon } from '@/client/components/icons/shield-icon.js'
import { Label } from '@/client/components/label/label.js'
import { ListGroup } from '@/client/components/list-group/list-group.js'
import { Modal } from '@/client/components/ui-old/modal/modal.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { rpc } from '@/client/lib/rpc.js'
import { TGroupSubjectFields } from '@/core/group-subject_controller.js'
import { TGroupFields } from '@/core/group_controller.js'
import { TData, TPermissions } from '@/types/index.js'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'

export function Permissions({
  permissions = {},
}: {
  permissions: TPermissions
}) {
  const [show, setShow] = useState(false)
  const [groupCurrent, setGroupCurrent] = useState(0)

  const groupListQuery = useQuery({
    queryKey: ['group'],
    queryFn: () =>
      rpc.request('group_list', {
        orderBy: [['NomeGrupo', 'asc']],
      }) as unknown as Promise<TData<TGroupFields>[]>,
  })
  const permitedQuery = useQuery({
    queryKey: ['groupSubject', groupCurrent],
    queryFn: () =>
      rpc.request('groupSubject_list', {
        where: [['idGroup', groupCurrent.toString()]],
      }) as unknown as Promise<TData<TGroupSubjectFields>[]>,
  })
  const queryClient = useQueryClient()

  function handleGroup(group: number) {
    setGroupCurrent(group)
  }

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
      idGroup: groupCurrent.toString(),
      idSubjectList: Object.values(permissions).map(
        (permission) => permission.key
      ),
    }
    const data = await rpc.request('groupSubject_listPermissions', params)

    const exist =
      data.findIndex((prm: any) => permissionKey === prm.idSubject) !== -1

    if (exist) {
      await rpc.request('groupSubject_del', {
        where: [
          ['idGroup', groupCurrent.toString()],
          ['idSubject', permissionKey],
        ],
      })
    } else {
      await rpc.request('groupSubject_create', {
        data: {
          idGroup: groupCurrent,
          idSubject: permissionKey,
        },
      })
    }
    permitedQuery.refetch()
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
            {groupListQuery.data?.map((group) => (
              <ListGroup
                key={group.kGrupo}
                className="max-h-96 overflow-y-auto"
              >
                <ListGroup.Item
                  active={group.kGrupo === groupCurrent}
                  onClick={() => handleGroup(group.kGrupo || 0)}
                >
                  {group.NomeGrupo}
                </ListGroup.Item>
              </ListGroup>
            ))}
          </div>
          <div>
            <p>Permissões</p>
            <ListGroup>
              {Object.keys(permissions).map((permission) => (
                <ListGroup.Item
                  key={permission}
                  onClick={() => handlePermission(permission)}
                >
                  <div className="flex flex-row items-center gap-x-2">
                    <Checkbox
                      id={permission}
                      checked={
                        permitedQuery.data
                          ? permitedQuery.data.findIndex(
                              (prm) => permission === prm.idSubject
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
              ))}
            </ListGroup>
          </div>
        </div>
      </Modal>
      <MsgBox />
    </>
  )
}
