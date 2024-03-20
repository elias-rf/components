import { TDataSource } from '@/data/index.js'
import { module10 } from '@/utils/string/module10.js'

/**
 * Async function that controls something.
 *
 * @param {Object} args - An object with an id and a serie
 * @param {TId} args.id - An id
 * @param {string} args.serie - A serie
 * @return {Promise<string>} A string containing a serial concatenated with a dv
 */
export const controle =
  (dataSource: TDataSource) =>
  async ({ id, serie }: { id: [['id', number]]; serie: string }) => {
    // dataSource.oftalmo.ordemProducao.orm.util.validId(id)
    const [[_, value]] = id

    const serial = '000000'
      .concat((value / 100).toString())
      .slice(-6)
      .concat('00000'.concat(serie).slice(-5))
    const dv = module10(serial)
    return serial.concat(dv)
  }
