import { HttpResponse, http } from 'msw'
import { agendaTelefoneHandlers } from '../../../utils/mocks/core-msw/agenda-telefone.mjs'
import { clienteHandlers } from '../../../utils/mocks/core-msw/cliente.mjs'
import { esterilizacaoExternaHandlers } from '../../../utils/mocks/core-msw/esterilizacao-externa.mjs'
import { esterilizacaoInternaHandlers } from '../../../utils/mocks/core-msw/esterilizacao-interna.mjs'
import { groupSubjectHandlers } from '../../../utils/mocks/core-msw/group-subject.mjs'
import { groupHandlers } from '../../../utils/mocks/core-msw/group.mjs'
import { nfEntradaHandlers } from '../../../utils/mocks/core-msw/nf-entrada.mjs'
import { nfSaidaHandlers } from '../../../utils/mocks/core-msw/nf-saida.mjs'
import { ordemProducaoOperacaoHandlers } from '../../../utils/mocks/core-msw/ordem-producao-operacao.mjs'
import { ordemProducaoHandlers } from '../../../utils/mocks/core-msw/ordem-producao.mjs'
import { usuarioHandlers } from '../../../utils/mocks/core-msw/usuario.mjs'

const url = 'http://localhost:3333/api/rpc2'

const notFoundHandler = http.post(url, async ({ request }) => {
  const body = await request.json()
  console.log(
    `%c🔴 ~ handlers ~ NOT FOUND:`,
    'background: #F00; color: #FFF',
    body
  )
  return new HttpResponse(null, { status: 404 })
})
let lastRpcId = ''
const loggerHandler = http.post(url, async ({ request }) => {
  const body = await request.clone().json()
  if (lastRpcId !== body.id) {
    lastRpcId = body.id
    // console.log(`🚀 ~ handlers ~ RPC:`, body)
  }
})

export const handlers = [
  loggerHandler,
  ...agendaTelefoneHandlers,
  ...clienteHandlers,
  ...esterilizacaoExternaHandlers,
  ...esterilizacaoInternaHandlers,
  ...groupHandlers,
  ...groupSubjectHandlers,
  ...nfEntradaHandlers,
  ...nfSaidaHandlers,
  ...ordemProducaoHandlers,
  ...ordemProducaoOperacaoHandlers,
  ...usuarioHandlers,
  notFoundHandler,
]
