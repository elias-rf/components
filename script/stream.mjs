import { stdout } from 'process'
import { Readable, Transform, Writable } from 'stream'

let ct = 1

const writable = new Writable({
  objectMode: true,
  write: (chunk, encoding, callback) => {
    setTimeout(() => {
      console.log(JSON.stringify(chunk))
      callback()
    }, 100)
  },
})

const readable = new Readable({
  objectMode: true,
  read: () => {
    setTimeout(() => {
      readable.push({ ct })
      ct++
      if (ct > 10) readable.push(null)
    }, 100)
  },
})

const transform = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    setTimeout(() => {
      chunk.ct = chunk.ct * 2
      callback(null, chunk)
    }, 200)
  },
})

readable.pipe(transform).pipe(writable)
