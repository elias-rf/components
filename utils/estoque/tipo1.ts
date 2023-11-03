import { Caixa } from './caixa'
import { Flex } from './flex'
import { Produto } from './produto'

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
