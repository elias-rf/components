export const lx = {
  num: 1,
  then: function (onFulfilled: Resolve<number>) {
    setTimeout(() => onFulfilled(42), 10)
  },
}
