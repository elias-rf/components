import { Caixa } from './caixa'
import { Flex } from './flex'
import { Produto } from './produto'

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
