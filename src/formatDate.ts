import * as dayjs from 'dayjs';
/**
 * formata uma data para qualquer formato indicado
 *
 * @param {date} date
 * @param {string} fmt
 * @returns {string} data no formato indicado
 */
function formatDate(date, fmt) {
    return dayjs(date).format(fmt);
}

export default formatDate;
