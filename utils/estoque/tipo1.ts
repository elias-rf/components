import { Caixa } from './caixa.js'
import { Flex } from './flex.js'
import { Produto } from './produto.js'

export class Tipo1 extends Caixa {
  constructor() {
    super(260, 70, 170, 'tipo1')
  }

  add(produto: Produto): boolean {
    if (produto instanceof Flex) {
      produto.rotate('p3')
    }
    return super.add(produto)
  }
}
