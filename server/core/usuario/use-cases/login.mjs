import jwtService from 'jsonwebtoken'
import { config } from '../../../config/index.mjs'
import { passwordVerify } from '../../../utils/string/password-verify.mjs'

export const login =
  (dataSource) =>
  async ({ userName, password }, ctx) => {
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

    const resp = {
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
