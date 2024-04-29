import fs from 'fs'
import path from 'path'

const dataFile = '../data/telegram.json'
let telegram = []
export function reload() {
  telegram = JSON.parse(fs.readFileSync(path.join(__dirname, dataFile), 'utf8'))
  return telegram
}

/**
 * Lista todos os registros retornaando um array
 *
 * @param {import('..').RestQuery} [args={}]
 * @return {Promise<object>}
 */
export function list() {
  return telegram
}

/**
 * Cria um registro e retorna um array com a quantidade de registros afetados
 *
 * @param {object} rec
 * @return {Promise<object>}
 */
export function insert(rec) {
  // rec.id = authorization.length
  //   ? Math.max(...authorization.map((x) => x.id)) + 1
  //   : 1;
  // rec.dateCreated = new Date().toISOString();
  // rec.dateUpdated = new Date().toISOString();

  telegram.push(rec)
  saveData()
}

/**
 * Apaga um registro e retorna a quantidade de registros afetados
 *
 * @param {import('..').RecordId} id
 * @return {Promise<object>}
 */
export function del(idUser) {
  telegram = telegram.filter(
    (x) => !(x.idUser.toString() === idUser.toString())
  )
  saveData()
}

/**
 * Retorna um registro
 *
 * @param {import('..').RecordId} id
 * @param {import('..').RestQuery} args Usa apenas o select
 * @return {Promise<object>}
 */
export function read(idUser) {
  if (!idUser) {
    return undefined
  }
  return telegram.find((x) => x.idUser.toString() === idUser.toString())
}

/**
 * Altera um registro e retorna um array com a quantidade de registros afetados
 *
 * @param {import('..').RecordId} id
 * @param {object} rec
 * @return {Promise<object>}
 */
export function update(idUser, rec) {
  const record = telegram.find((x) => x.idUser.toString() === idUser.toString())
  // rec.dateUpdated = new Date().toISOString();
  Object.assign(record || {}, rec)
  saveData()
}

function saveData() {
  fs.writeFileSync(
    path.join(__dirname, dataFile),
    JSON.stringify(telegram, null, 2)
  )
}

reload()
