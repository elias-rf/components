import { cloneDeep } from 'lodash-es'
// import { TQuery } from './driver-mock.js'

/**
 * Clones the given data array and returns a new object with the cloned data and the original query.
 *
 * @param {Object} params - The parameters for cloning the data.
 * @param {Array<Object>} params.data - The data array to be cloned.
 * @param {TQuery} params.query - The original query.
 * @return {Object} - The cloned data and the original query.
 */
export function fnClone({ data, query }) {
  return { data: cloneDeep(data), query }
}
