import { TDataSource } from '@/data/index.js'
import { TRpcContext } from '@/server/routes/rpc2.js'
import type { TCurrentUser } from '@/types/index.js'
import { config } from '@/utils/config/index.js'
import { passwordVerify } from '@/utils/string/password-verify.js'
import jwtService from 'jsonwebtoken'

export const login =
  (dataSource: TDataSource['oftalmo']['usuario']) =>
  async (
    { userName, password }: { userName: string; password: string },
    ctx?: TRpcContext
  ): Promise<TCurrentUser> => {
    if (!userName) {
      throw new Error('Usuário não informado')
    }

    if (!password) {
      throw new Error('Senha não informada')
    }

    const [record] = await dataSource.list({
      where: [['usuario', userName]],
    })

    if (!record) {
      throw new Error('Usuário não cadastrado')
    }

    if (record.ativo === 0) {
      throw new Error('Cadastro inativo')
    }

    const passOk = passwordVerify(password, record.senha || '', 'sha256')
    if (!passOk) {
      throw new Error('Senha incorreta')
    }

    const resp: TCurrentUser = {
      id: record.id || 0,
      usuario: record.usuario || '',
      nome: record.nome || '',
      grupoIds: record.grupos || '',
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
