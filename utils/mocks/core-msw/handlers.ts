import { agendaTelefoneHandlers } from '@/utils/mocks/core-msw/agenda-telefone.js'
import { clienteHandlers } from '@/utils/mocks/core-msw/cliente.js'
import { esterilizacaoExternaHandlers } from '@/utils/mocks/core-msw/esterilizacao-externa.js'
import { esterilizacaoInternaHandlers } from '@/utils/mocks/core-msw/esterilizacao-interna.js'
import { groupSubjectHandlers } from '@/utils/mocks/core-msw/group-subject.js'
import { groupHandlers } from '@/utils/mocks/core-msw/group.js'
import { nfEntradaHandlers } from '@/utils/mocks/core-msw/nf-entrada.js'
import { nfSaidaHandlers } from '@/utils/mocks/core-msw/nf-saida.js'
import { ordemProducaoOperacaoHandlers } from '@/utils/mocks/core-msw/ordem-producao-operacao.js'
import { ordemProducaoHandlers } from '@/utils/mocks/core-msw/ordem-producao.js'
import { usuarioHandlers } from '@/utils/mocks/core-msw/usuario.js'
import { HttpResponse, http } from 'msw'

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
