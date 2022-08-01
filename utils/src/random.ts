export function Random(seed?: number) {
  if (seed === undefined) {
    seed = new Date().getTime();
  }

  const N = 624;
  const M = 397;
  const MATRIX_A = 0x9908b0df; /* constant vector a */
  const UPPER_MASK = 0x80000000; /* most significant w-r bits */
  const LOWER_MASK = 0x7fffffff; /* least significant r bits */

  const mt = new Array(N); /* the array for the state vector */
  let mti = N + 1; /* mti==N+1 means mt[N] is not initialized */

  mt[0] = seed >>> 0;
  for (mti = 1; mti < N; mti++) {
    var s = mt[mti - 1] ^ (mt[mti - 1] >>> 30);
    mt[mti] =
      ((((s & 0xffff0000) >>> 16) * 1812433253) << 16) +
      (s & 0x0000ffff) * 1812433253 +
      mti;
    mt[mti] >>>= 0;
  }

  const rndInt = () => {
    let y;
    var mag01 = new Array(0x0, MATRIX_A);

    if (mti >= N) {
      var kk;

      for (kk = 0; kk < N - M; kk++) {
        y = (mt[kk] & UPPER_MASK) | (mt[kk + 1] & LOWER_MASK);
        mt[kk] = mt[kk + M] ^ (y >>> 1) ^ mag01[y & 0x1];
      }
      for (; kk < N - 1; kk++) {
        y = (mt[kk] & UPPER_MASK) | (mt[kk + 1] & LOWER_MASK);
        mt[kk] = mt[kk + (M - N)] ^ (y >>> 1) ^ mag01[y & 0x1];
      }
      y = (mt[N - 1] & UPPER_MASK) | (mt[0] & LOWER_MASK);
      mt[N - 1] = mt[M - 1] ^ (y >>> 1) ^ mag01[y & 0x1];

      mti = 0;
    }

    y = mt[mti++];

    y ^= y >>> 11;
    y ^= (y << 7) & 0x9d2c5680;
    y ^= (y << 15) & 0xefc60000;
    y ^= y >>> 18;

    return y >>> 0;
  };

  const rnd = {
    rand: () => rndInt() * (1.0 / 4294967296.0),
    range: (from = -1000, to = 1000): number => {
      return Math.floor(from + (to - from + 1) * rnd.rand());
    },
    weighted: (weights: number[]): number => {
      const total = weights.reduce((a, b) => a + b, 0);
      const r = rnd.rand() * total;
      let sum = 0;
      for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        if (sum >= r) {
          return i;
        }
      }
      return weights.length - 1;
    },
  };
  return rnd;
}
