import { agendaTelefoneController } from '@/controllers/agenda-telefone.controller'
import { PrimFastifyContext } from '@doseofted/prim-rpc-plugins/fastify'

export function sayHello(this: PrimFastifyContext, x: string, y: string) {
  console.log(this.request.user)
  return `${x}, meet ${y}.`
}
sayHello.rpc = true

export const module = {
  agendaTelefone: { ...agendaTelefoneController },
}

export type Module = typeof module
