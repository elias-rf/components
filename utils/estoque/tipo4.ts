import { Caixa } from './caixa.js'
import { Flex } from './flex.js'
import { Produto } from './produto.js'

export class Tipo4 extends Caixa {
  constructor() {
    super(360, 280, 155, 'tipo4')
  }

  add(produto: Produto): boolean {
    if (produto instanceof Flex) {
      produto.rotate('p3')
    }
    return super.add(produto)
  }
}
