import { config } from '@/config'
import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { TUsuario } from '@/database'
import { OrmDatabase, OrmTable } from '@/orm'
import {
  Ttbl_Seguranca_Usuario,
  tbl_Seguranca_Usuario,
} from '@/schemas/oftalmo/tbl_Seguranca_Usuario.schema'
import type { TCurrentUser } from '@/types'
import { day } from '@/utils/date/day'
import { passwordVerify } from '@/utils/string/password-verify'

import type { TSchema } from '@/schemas/schema.type'

class UsuarioController extends OrmTable<Ttbl_Seguranca_Usuario> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }

  async me(ctx: any) {
    const resp = ctx.req.user
    if (resp && resp.iat) {
      resp.iat = day.unix(resp.iat).format('YYYY-MM-DDTHH:mm:ss')
      resp.exp = day.unix(resp.exp).format('YYYY-MM-DDTHH:mm:ss')
    }
    return (resp as TCurrentUser) || 'NOT_LOGGED'
  }

  async logout(ctx: any) {
    ctx.res.clearCookie('token', { path: '/' })
    return true
  }

  async login(
    { user, password }: { user: string; password: string },
    ctx: any
  ) {
    let record: TUsuario
    if (!user) {
      throw new Error('Usuário não informado')
    }

    if (!password) {
      throw new Error('Senha não informada')
    }

    try {
      const rec = await this.list({
        filter: [['NomeUsuario', user]],
      })
      record = rec[0]
    } catch (err: any) {
      throw new Error(`erro de acesso ao banco de dados: ${err.message}`)
    }

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
    resp.token = await ctx.res.jwtSign(resp)

    ctx.res.setCookie('token', resp.token, {
      maxAge: config.auth.expiration,
      path: '/',
    })
    return resp
  }
}

export const usuarioController = new UsuarioController(
  dbOftalmo,
  tbl_Seguranca_Usuario
)
