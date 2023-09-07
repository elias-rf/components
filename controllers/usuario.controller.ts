import { config } from '@/config'
import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { tbl_Seguranca_Usuario } from '@/schemas/oftalmo/tbl_Seguranca_Usuario.schema'
import type { TCurrentUser } from '@/types'
import { day } from '@/utils/date/day'
import { passwordVerify } from '@/utils/string/password-verify'
import type { TSchema } from '@/schemas/schema.type'
import { PrimFastifyContext } from '@doseofted/prim-rpc-plugins/fastify'

export type TUsuarioFields = keyof typeof tbl_Seguranca_Usuario.fields
export type TUsuarioKeys = (typeof tbl_Seguranca_Usuario.primary)[number]

function usuarioControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TUsuarioFields, TUsuarioKeys>(db, schema)

  const me = async (ctx: any) => {
    const resp = ctx.req.user
    if (resp && resp.iat) {
      resp.iat = day.unix(resp.iat).format('YYYY-MM-DDTHH:mm:ss')
      resp.exp = day.unix(resp.exp).format('YYYY-MM-DDTHH:mm:ss')
    }
    return (resp as TCurrentUser) || 'NOT_LOGGED'
  }
  me.rpc = true

  const logout = async (ctx: any) => {
    ctx.res.clearCookie('token', { path: '/' })
    return true
  }
  logout.rpc = true

  async function login({
    user,
    password,
  }: {
    user: string
    password: string
  }): Promise<TCurrentUser>
  async function login(
    this: PrimFastifyContext,
    { user, password }: { user: string; password: string }
  ): Promise<TCurrentUser> {
    if (!user) {
      throw new Error('Usuário não informado')
    }

    if (!password) {
      throw new Error('Senha não informada')
    }

    const [record] = await orm.list({
      where: [['NomeUsuario', user]],
    })

    if (!record) {
      throw new Error('Usuário não cadastrado')
    }

    if (record.Ativo === 0) {
      throw new Error('Cadastro inativo')
    }

    const passOk = passwordVerify(password, record.hash || '', 'sha256')
    if (!passOk) {
      throw new Error('Senha incorreta')
    }

    const resp: TCurrentUser = {
      usuario_id: record.kUsuario || 0,
      nome_login: record.NomeUsuario || '',
      nome: record.nome || '',
      group_id: record.idGroup || '',
    }
    resp.token = await this.reply.jwtSign(resp)

    this.reply.setCookie('token', resp.token, {
      maxAge: config.auth.expiration,
      path: '/',
    })
    return resp
  }
  login.rpc = true

  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
    me,
    logout,
    login,
  }
}

export const usuarioController = usuarioControllerFactory(
  dbOftalmo,
  tbl_Seguranca_Usuario
)
