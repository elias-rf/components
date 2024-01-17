const recordClear = {
  id: '',
  name: '',
  email: '',
  department: '',
}

const record = {
  id: '1',
  name: '',
  email: '',
  department: undefined,
}

console.log({ ...recordClear, ...record })
