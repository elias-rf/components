# Client

## Security

### Authentication

rpc.usuario.login$({user, password})
rpc.usuario.me()

auth.store.login({user:string, password:string}) => Executa o login no servidor
auth.store.logout() => Apaga as informações de login no cliente
auth.store.token
auth.store.user:{ usuario_id, nome_login, nome, group_ids, token}
auth.store.isAuthenticated() => Retorna true se existe usuario logado

### Authorization

rpc.groupSubject.list()
rpc.groupSubject.can({kUsuario, idSubject})
rpc.groupSubject.listPermissions({idGroup, idSubjectList})

auth.store.permissions:{ [perm]: boolean }
auth.store.fetchPermissions() => Busca todas as permissoes do usuario
auth.store.can(permission:string) => Retorna true se o usuario tem a permissão
auth.store.canList({[permission]}) => Retorna boolean para cada permission
