import { Caixa } from './caixa.mjs'
import { Flex } from './flex.mjs'
import { Produto } from './produto.mjs'

export class Tipo1 extends Caixa {
  constructor() {
    super(260, 70, 170, 'tipo1')
  }

  add(produto) {
    if (produto instanceof Flex) {
      produto.rotate('p3')
    }
    return super.add(produto)
  }
}
