import { config } from '@/config/index.js'
import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TRpcContext } from '@/server/routes/rpc2.js'
import type { TCurrentUser } from '@/types/index.js'
import { day } from '@/utils/date/day.js'
import { passwordVerify } from '@/utils/string/password-verify.js'
import jwtService from 'jsonwebtoken'

export const tbl_Seguranca_Usuario = {
  database: 'oftalmo',
  table: 'tbl_Seguranca_Usuario',
  primary: ['kUsuario'] as const,
  fields: [
    'kUsuario', // id
    'nome', // nome sobrenome
    'email', // email de contato
    'setor', // grupos de acesso
    'fkFuncionario', // id funcional
    'NomeUsuario', // login
    'hash', // password
    'Ativo', // enabled
    'Senha',
    'fkGrupo',
    'nivel',
    'idGroup',
  ] as const,
}

export type TUsuarioFields = (typeof tbl_Seguranca_Usuario.fields)[number]
export type TUsuarioKeys = (typeof tbl_Seguranca_Usuario.primary)[number]

function usuarioControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TUsuarioFields, TUsuarioKeys>(db, schema)

  /** ME */
  async function usuario_me(_: void, ctx?: TRpcContext) {
    const resp: any = { ...ctx?.user }
    if (resp && resp.iat) {
      resp.iat = day.unix(resp.iat).format('YYYY-MM-DDTHH:mm:ss')
      resp.exp = day.unix(resp.exp).format('YYYY-MM-DDTHH:mm:ss')
    }
    return (resp as TCurrentUser) || 'NOT_LOGGED'
  }

  /** LOGIN */
  async function usuario_login(
    { user, password }: { user: string; password: string },
    ctx?: TRpcContext
  ): Promise<TCurrentUser> {
    if (!user) {
      throw new Error('Usuário não informado')
    }

    if (!password) {
      throw new Error('Senha não informada')
    }

    const [record] = await orm.rpc.list({
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
      group_ids: record.setor || '',
    }

    resp.token = jwtService.sign(resp, config.auth.secret, {
      expiresIn: config.auth.expiration,
    })

    ctx?.res.cookie('token', resp.token, {
      httpOnly: true,
      sameSite: 'none',
      // secure: true,
      maxAge: config.auth.expiration * 1000,
    })

    return resp
  }

  return {
    usuario_list: orm.rpc.list,
    usuario_read: orm.rpc.read,
    usuario_count: orm.rpc.count,
    usuario_update: orm.rpc.update,
    usuario_create: orm.rpc.create,
    usuario_del: orm.rpc.del,
    usuario_increment: orm.rpc.increment,
    usuario_me,
    usuario_login,
  }
}

export const usuarioController = usuarioControllerFactory(
  dbOftalmo,
  tbl_Seguranca_Usuario
)
