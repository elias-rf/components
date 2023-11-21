import { Enlite } from '@/utils/estoque/enlite.js'
import { Flex } from '@/utils/estoque/flex.js'
import { Tipo1 } from '@/utils/estoque/tipo1.js'
import { Tipo2 } from '@/utils/estoque/tipo2.js'
import { Tipo3 } from '@/utils/estoque/tipo3.js'
import { Tipo334 } from '@/utils/estoque/tipo334.js'
import { Tipo4 } from '@/utils/estoque/tipo4.js'
import { Tipo578 } from '@/utils/estoque/tipo578.js'
import { Tipo605 } from '@/utils/estoque/tipo605.js'

export function produtoCaixa(qtdFlex: number, qtdEnlite: number) {
  const response = {
    tipo1: 0,
    tipo2: 0,
    tipo3: 0,
    tipo4: 0,
    tipo334: 0,
    tipo578: 0,
    tipo605: 0,
  }
  try {
    const cx = new Tipo1()
    for (let i = 0; i < qtdFlex; i++) {
      const flex = new Flex()
      cx.add(flex)
    }
    for (let i = 0; i < qtdEnlite; i++) {
      const enlite = new Enlite()
      cx.add(enlite)
    }
    response.tipo1 = cx.aproveitamento()
  } catch (error) {
    console.log(error)
  }
  try {
    const cx = new Tipo2()
    for (let i = 0; i < qtdFlex; i++) {
      const flex = new Flex()
      cx.add(flex)
    }
    for (let i = 0; i < qtdEnlite; i++) {
      const enlite = new Enlite()
      cx.add(enlite)
    }
    response.tipo2 = cx.aproveitamento()
  } catch (error) {
    console.log(error)
  }
  try {
    const cx = new Tipo3()
    for (let i = 0; i < qtdFlex; i++) {
      const flex = new Flex()
      cx.add(flex)
    }
    for (let i = 0; i < qtdEnlite; i++) {
      const enlite = new Enlite()
      cx.add(enlite)
    }
    response.tipo3 = cx.aproveitamento()
  } catch (error) {
    console.log(error)
  }
  try {
    const cx = new Tipo4()
    for (let i = 0; i < qtdFlex; i++) {
      const flex = new Flex()
      cx.add(flex)
    }
    for (let i = 0; i < qtdEnlite; i++) {
      const enlite = new Enlite()
      cx.add(enlite)
    }
    response.tipo4 = cx.aproveitamento()
  } catch (error) {
    console.log(error)
  }
  try {
    const cx = new Tipo334()
    for (let i = 0; i < qtdFlex; i++) {
      const flex = new Flex()
      cx.add(flex)
    }
    for (let i = 0; i < qtdEnlite; i++) {
      const enlite = new Enlite()
      cx.add(enlite)
    }
    response.tipo334 = cx.aproveitamento()
  } catch (error) {
    console.log(error)
  }
  try {
    const cx = new Tipo578()
    for (let i = 0; i < qtdFlex; i++) {
      const flex = new Flex()
      cx.add(flex)
    }
    for (let i = 0; i < qtdEnlite; i++) {
      const enlite = new Enlite()
      cx.add(enlite)
    }
    response.tipo578 = cx.aproveitamento()
  } catch (error) {
    console.log(error)
  }
  try {
    const cx = new Tipo605()
    for (let i = 0; i < qtdFlex; i++) {
      const flex = new Flex()
      cx.add(flex)
    }
    for (let i = 0; i < qtdEnlite; i++) {
      const enlite = new Enlite()
      cx.add(enlite)
    }
    response.tipo605 = cx.aproveitamento()
  } catch (error) {
    console.log(error)
  }
  return response
}
