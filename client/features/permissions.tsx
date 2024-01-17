import { Button } from '@/client/components/button/button.js'
import { Checkbox } from '@/client/components/checkbox/checkbox.js'
import { ShieldIcon } from '@/client/components/icons/shield-icon.js'
import { Label } from '@/client/components/label/label.js'
import { ListGroup } from '@/client/components/list-group/list-group.js'
import { Modal } from '@/client/components/ui-old/modal.js'
import { rpc } from '@/client/lib/rpc.js'
import { TGroupSubjectFields } from '@/core/group-subject_controller.js'
import { TGroupFields } from '@/core/group_controller.js'
import { TData } from '@/types/index.js'
import React, { useEffect, useState } from 'react'

export function Permissions({
  permissions = {},
}: {
  permissions: { [id: string]: string }
}) {
  const [show, setShow] = useState(false)
  const [groupList, setGroupList] = useState<TData<TGroupFields>[]>([])
  const [permited, setPermited] = useState<TData<TGroupSubjectFields>[]>([])
  const [groupCurrent, setGroupCurrent] = useState(0)

  useEffect(() => {
    async function getData() {
      const data = await rpc.request('group_list', {
        orderBy: [['NomeGrupo', 'asc']],
      })
      setGroupList(data)
    }
    getData()
  }, [])

  async function getPermited(groupCurrent: number) {
    const data = await rpc.request('groupSubject_list', {
      where: [['idGroup', groupCurrent.toString()]],
    })
    setPermited(data)
  }

  React.useEffect(() => {
    getPermited(groupCurrent)
  }, [groupCurrent])

  function handleGroup(group: number) {
    setGroupCurrent(group)
  }

  async function handlePermission(permission: string) {
    if (groupCurrent === 0) return
    const data = await rpc.request('groupSubject_listPermissions', {
      idGroup: groupCurrent.toString(),
      idSubjectList: Object.keys(permissions),
    })

    const exist =
      data.findIndex((prm: any) => permission === prm.idSubject) !== -1

    if (exist) {
      await rpc.request('groupSubject_del', {
        where: [
          ['idGroup', groupCurrent.toString()],
          ['idSubject', permission],
        ],
      })
    } else {
      await rpc.request('groupSubject_create', {
        data: {
          idGroup: groupCurrent,
          idSubject: permission,
        },
      })
    }
    getPermited(groupCurrent)
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
            {groupList?.map((group) => (
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
                        permited
                          ? permited.findIndex(
                              (prm) => permission === prm.idSubject
                            ) !== -1
                          : false
                      }
                    />
                    <Label
                      className="align-middle"
                      htmlFor={permission}
                    >
                      {permissions[permission]}
                    </Label>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      </Modal>
    </>
  )
}
