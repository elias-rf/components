import { TEtiquetaExternaController } from '@/core/etiqueta-externa/etiqueta-externa_controller.js'

/**
 * Asynchronously retrieves a list of external labels given an id.
 *
 * @param {Object} args - An object with an id property.
 * @param {TId} args.id - The id of the external label.
 * @return {Promise<Array>} A promise that resolves to an array of external labels.
 */
export const etiquetaExterna =
  ({
    etiquetaExternaController,
  }: {
    etiquetaExternaController: TEtiquetaExternaController
  }) =>
  async ({ id }: { id: [['kOp', number]] }) => {
    const [[_, value]] = id
    if (value === undefined) return []
    return etiquetaExternaController.etiquetaExterna_list({
      where: [
        ['id', 'like', ('000000' + value.toString()).slice(-8, -2) + '%'],
      ],
      orderBy: [['id', 'asc']],
      limit: 1000,
    })
  }
