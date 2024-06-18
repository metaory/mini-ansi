export default new Proxy(
  { f: 3, b: 4, n: '\x1b[0m' },
  {
    get:
      (t, p) =>
      (...a) =>
        [
          p
            .toLowerCase()
            .match(/[fb][0-9]/g)
            .reduce(
              (acc, [x, y], i, a) => (acc += `${t[x]}${y}${i === a.length - 1 ? 'm' : ';'}`),
              '\x1b['
            ),
          ...a,
          t.n,
        ].join(''),
  }
)
