import { TGroupSubjectFields } from '@/controllers/group-subject.controller'
import { TGroupFields } from '@/controllers/group.controller'
import { rpc } from '@/rpc/rpc-client'
import { TData } from '@/types'
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone'
import { Checkbox, IconButton } from '@mui/material'
import { ListGroup, Modal } from 'flowbite-react'
import React from 'react'

export function Permissions({
  permissions = {},
}: {
  permissions: { [id: string]: string }
}) {
  const [show, setShow] = React.useState(false)
  const [groupList, setGroupList] = React.useState<TData<TGroupFields>[]>([])
  const [permited, setPermited] = React.useState<TData<TGroupSubjectFields>[]>(
    []
  )
  const [groupCurrent, setGroupCurrent] = React.useState(0)

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.group.list({
        orderBy: [['NomeGrupo', 'asc']],
      })
      setGroupList(data)
    }
    getData()
  }, [])

  async function getPermited(groupCurrent: number) {
    const data = await rpc.groupSubject.list({
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
    const data = await rpc.groupSubject.listPermissions({
      idGroup: groupCurrent.toString(),
      idSubjectList: Object.keys(permissions),
    })

    const exist =
      data.findIndex((prm: any) => permission === prm.idSubject) !== -1

    if (exist) {
      await rpc.groupSubject.del({
        id: [
          ['idGroup', groupCurrent.toString()],
          ['idSubject', permission],
        ],
      })
    } else {
      await rpc.groupSubject.create({
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
      <IconButton
        aria-label="delete"
        onClick={() => setShow(true)}
      >
        <AdminPanelSettingsTwoToneIcon />
      </IconButton>
      <Modal
        onClose={() => setShow(false)}
        show={show}
        size="4xl"
      >
        <Modal.Header>Segurança</Modal.Header>
        <Modal.Body>
          <div className="flex space-x-4">
            <div>
              <p>Grupos</p>
              {groupList?.map((group) => (
                <ListGroup
                  key={group.kGrupo}
                  className="overflow-y-auto max-h-96"
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
                    <Checkbox
                      edge="start"
                      checked={
                        permited
                          ? permited.findIndex(
                              (prm) => permission === prm.idSubject
                            ) !== -1
                          : false
                      }
                      tabIndex={-1}
                      disableRipple
                    />

                    {permissions[permission]}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
