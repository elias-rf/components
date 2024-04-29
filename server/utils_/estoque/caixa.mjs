import { round } from '../../utils/number/round.mjs'
import { Enlite } from './enlite.mjs'
import { Flex } from './flex.mjs'
import { Produto } from './produto.mjs'

export class Caixa {
  name = 'caixa'
  dim = {
    x: 0,
    y: 0,
    z: 0,
  }

  next = {
    x: 0,
    y: 0,
    z: 0,
  }

  max = {
    x: 0,
    y: 0,
    z: 0,
  }

  count = {}

  ordem = []

  constructor(x, y, z, name) {
    this.dim.x = x
    this.dim.y = y
    this.dim.z = z
    if (name) this.name = name
  }

  clear() {
    this.next = { x: 0, y: 0, z: 0 }
    this.max = { x: 0, y: 0, z: 0 }

    this.count = {}
    this.ordem = []
  }

  volume() {
    return this.dim.x * this.dim.y * this.dim.z
  }

  maxQuantity() {
    const response = {
      flex: { quantidade: 0, aproveitamento: 0 },
      enlite: { quantidade: 0, aproveitamento: 0 },
    }
    this.clear()
    for (let ct = 1; ct < 1000; ct++) {
      try {
        this.add(new Flex())
      } catch (e) {
        response.flex.quantidade = this.count.flex
        response.flex.aproveitamento = this.aproveitamento()
        break
      }
    }
    this.clear()
    for (let ct = 1; ct < 1000; ct++) {
      try {
        this.add(new Enlite())
      } catch (e) {
        response.enlite.quantidade = this.count.enlite
        response.enlite.aproveitamento = this.aproveitamento()
        break
      }
    }
    return response
  }

  aproveitamento() {
    const produto = this.ordem.reduce((acc, item) => {
      acc += item.produto.volume()
      return acc
    }, 0)

    return round((produto / this.volume()) * 100)
  }

  _add(produto) {
    if (
      this.next.x + produto.x <= this.dim.x &&
      this.next.y + produto.y <= this.dim.y &&
      this.next.z + produto.z <= this.dim.z
    ) {
      this.ordem.push({
        ...this.next,
        produto,
      })
      // console.log({ point: this.next })
      if (this.max.x < produto.x) this.max.x = produto.x
      if (this.max.z < produto.z) this.max.z = produto.z
      this.next.y += produto.y
      return true
    }
    return false
  }

  _goNext(status) {
    // console.log('next status', status, this.next, this.max)
    if (status === 'coluna') {
      if (this.next.x + this.max.x <= this.dim.x) {
        this.next.x += this.max.x
        this.next.y = 0
        this.max.x = 0
        // console.log('next col', this.next)
        return true
      }
    }
    if (status === 'nivel') {
      if (this.next.z + this.max.z <= this.dim.z) {
        this.next.z += this.max.z
        this.next.x = 0
        this.next.y = 0
        // console.log('next nivel', this.next)
        return true
      }
    }
    return false
  }

  add(produto) {
    // adiciona na coluna p1
    let added = this._add(produto)
    // if (added) console.log(this.ordem.length, 'added col p1', added)

    // adiciona proxima coluna p1
    if (!added) {
      this._goNext('coluna')
      added = this._add(produto)
      // if (added) console.log(this.ordem.length, 'added next col p1', added)
    }

    // adiciona na coluna p2
    if (!added) {
      // produto.rotate('p2')
      produto.rotate90()

      added = this._add(produto)
      // if (added) console.log(this.ordem.length, 'added col p2', added)
    }

    // adiciona proximo nivel p1
    if (!added) {
      // produto.rotate('p1')
      produto.rotate90()
      this._goNext('nivel')
      added = this._add(produto)
      // if (added) console.log(this.ordem.length, 'added next nivel p1', added)
    }

    // não há espaço
    if (!added) {
      throw new Error('Caixa cheia')
    }

    this.count = {}

    for (const item of this.ordem) {
      if (!this.count[item.produto.name]) this.count[item.produto.name] = 0
      this.count[item.produto.name] += 1
    }
    return added
  }

  addEnlite(qtd) {
    for (let ct = 0; ct < qtd; ct++) {
      this.add(new Enlite())
    }
    return this
  }

  addFlex(qtd) {
    for (let ct = 0; ct < qtd; ct++) {
      this.add(new Flex())
    }
    return this
  }
}
