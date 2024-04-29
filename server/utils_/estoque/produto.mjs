export class Produto {
  name = 'produto'
  pos = 'p1'
  x = 0
  y = 0
  z = 0

  constructor(x, y, z, name) {
    this.x = x
    this.y = y
    this.z = z
    if (name) this.name = name
  }

  rotate90() {
    if (this.pos === 'p1') {
      this.rotate('p2')
      return
    }
    if (this.pos === 'p2') {
      this.rotate('p1')
      return
    }
    if (this.pos === 'p3') {
      this.rotate('p4')
      return
    }
    if (this.pos === 'p4') {
      this.rotate('p3')
    }
  }

  rotate(pos) {
    if (pos === this.pos) return this
    const newPos = [this.x + 0, this.y + 0, this.z + 0]

    newPos.sort((a, b) => b - a)

    if (pos === 'p1') {
      this.x = newPos[0]
      this.z = newPos[1]
      this.y = newPos[2]
    }
    if (pos === 'p2') {
      this.y = newPos[0]
      this.z = newPos[1]
      this.x = newPos[2]
    }
    if (pos === 'p3') {
      this.z = newPos[0]
      this.x = newPos[1]
      this.y = newPos[2]
    }
    if (pos === 'p4') {
      this.z = newPos[0]
      this.y = newPos[1]
      this.x = newPos[2]
    }

    this.pos = pos
    return this
  }
  volume() {
    return this.x * this.y * this.z
  }
}
