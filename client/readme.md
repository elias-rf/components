# Client

## Security

### Authentication

rpc.usuario.login$({user: string, password: string})
rpc.usuario.me()

auth.store.login({user:string, password:string}) => Executa o login no servidor
auth.store.logout() => Apaga as informações de login no cliente
auth.store.token: string
auth.store.user:{ usuario_id, nome_login, nome, group_ids, token}
auth.store.isAuthenticated() => Retorna true se existe usuario logado

### Authorization

rpc.groupSubject.list()
rpc.groupSubject.can({kUsuario: number, idSubject: string})
rpc.groupSubject.listPermissions({idGroup: string, idSubjectList: string[]})

auth.store.permissions:{ [perm: string]: boolean }
auth.store.fetchPermissions() => Busca todas as permissoes do usuario
auth.store.can(permission:string) => Retorna true se o usuario tem a permissão
auth.store.canList({[permission: string]: any}) => Retorna boolean para cada permission
