import Charm from 'charm'

const charm = Charm()
charm.pipe(process.stdout)
charm.reset()

export function printAt(lin, col, text) {
  charm.position(col, lin)
  charm.write(text)
}

export function printObject(obj) {
  let lin = 1
  for (const prop in obj) {
    printAt(lin, 1, prop)
    printAt(lin, 15, obj[prop].toString())
    lin++
  }
}
