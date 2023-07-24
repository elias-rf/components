import { trpc } from "@/utils/trpc/trpc";
import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

export function Permissions({
  permissions = [],
}: {
  permissions: { id: string; label: string }[];
}) {
  const [show, setShow] = React.useState(false);
  const trpcUtils = trpc.useContext();
  const groupList = trpc.group.list.useQuery({ sort: { name: "asc" } });
  const [groupCurrent, setGroupCurrent] = React.useState(0);
  const permited = trpc.groupSubject.listPermissions.useQuery({
    group_id: groupCurrent.toString(),
    subject_ids: permissions.map((permission) => permission.id),
  });
  const createPermited = trpc.groupSubject.create.useMutation({
    onSuccess: () => {
      trpcUtils.groupSubject.invalidate();
    },
  });
  const delPermited = trpc.groupSubject.del.useMutation({
    onSuccess: () => {
      trpcUtils.groupSubject.invalidate();
    },
  });

  function handleGroup(group: number) {
    setGroupCurrent(group);
  }
  function handlePermission(permission: string) {
    if (groupCurrent === 0) return;

    const exist =
      permited.data.findIndex((prm: any) => permission === prm.subject_id) !==
      -1;

    if (exist) {
      delPermited.mutate({
        id: { group_id: groupCurrent.toString(), subject_id: permission },
      });
    } else {
      createPermited.mutate({
        data: {
          group_id: groupCurrent,
          subject_id: permission,
        },
      });
    }
  }

  return (
    <>
      <IconButton
        aria-label="delete"
        onClick={() => setShow(true)}
      >
        <AdminPanelSettingsTwoToneIcon />
      </IconButton>
      <Dialog
        fullWidth
        maxWidth="lg"
        onClose={() => setShow(false)}
        open={show}
      >
        <DialogTitle>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid>Segurança</Grid>
            <Grid>
              <IconButton onClick={() => setShow(false)}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            spacing={2}
          >
            <Grid
              xs={12}
              sm={6}
              md={5}
              lg={3}
            >
              <Box sx={{ p: 1, border: "1px solid grey" }}>
                <Typography variant="h6">Grupos</Typography>
                <List dense>
                  {groupList.data?.map((group) => (
                    <ListItem
                      disablePadding
                      key={group.group_id}
                    >
                      <ListItemButton
                        onClick={() => handleGroup(group.group_id)}
                        selected={group.group_id === groupCurrent}
                      >
                        <ListItemText primary={group.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={7}
              lg={9}
            >
              <Box sx={{ p: 1, border: "1px solid grey" }}>
                <Typography variant="h6">Permissões</Typography>
                <List dense>
                  {permissions.map((permission) => (
                    <ListItem
                      disablePadding
                      key={permission.id}
                    >
                      <ListItemButton
                        onClick={() => handlePermission(permission.id)}
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={
                              permited.data
                                ? permited.data.findIndex(
                                    (prm) => permission.id === prm.subject_id
                                  ) !== -1
                                : false
                            }
                            tabIndex={-1}
                            disableRipple
                          />
                        </ListItemIcon>
                        <ListItemText primary={permission.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
