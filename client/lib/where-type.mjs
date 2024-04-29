export function whereType(where, field, type) {
  where.forEach((whr) => {
    if (whr[0] === field) {
      if (type === 'int') {
        whr[whr.length - 1] = parseInt(whr[whr.length - 1])
      }
    }
  })
  return where
}
