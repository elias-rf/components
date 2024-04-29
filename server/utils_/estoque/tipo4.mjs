import { Caixa } from './caixa.mjs'
import { Flex } from './flex.mjs'
import { Produto } from './produto.mjs'

export class Tipo4 extends Caixa {
  constructor() {
    super(360, 280, 155, 'tipo4')
  }

  add(produto) {
    if (produto instanceof Flex) {
      produto.rotate('p3')
    }
    return super.add(produto)
  }
}
