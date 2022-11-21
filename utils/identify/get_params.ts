const patterns = {
  stringPatterns: [/'[^]*?'/g, /"[^]*?"/g, /`[^]*?`/g],
  prePatterns: [
    /\[[^]*?\]/,
    /{[^]*?}/,
    /=>\s*?\([^]*?\)/,
    /=\s*?function\s*?\([^]*(?=[^]*\))/,
    /=\s*?\([^]*(?=[^]*\))/,
    /\s*?=[^>][^,)]*/,
  ],
  postPatterns: [/\([^]*?\)/],
};

const stringPatterns = patterns.stringPatterns;

function delim(id: string) {
  return [":~:", id, ":~:"].join("");
}
function encodeStrings(cache: string[], string: string) {
  for (;;) {
    const shortestString = stringPatterns
      .reduce(function (arr: string[], pattern) {
        return arr.concat(string.match(pattern) || []);
      }, [])
      .sort(function (a: string, b: string) {
        return a.length - b.length;
      })[0];

    if (!shortestString) return string;
    string = string.replace(shortestString, delim(cache.push(shortestString)));
  }
}

function encode(cache: string[], string: string, patterns: RegExp[]) {
  patterns.forEach(function (pattern) {
    while (pattern.test(string)) {
      const match = pattern.exec(string)[0];
      string = string.replace(match, delim(cache.push(match)));
    }
  });
  return string;
}

function decode(cache: string[], string: string, skipEval: boolean) {
  const pattern = /:~:(\d+?):~:/;
  while (pattern.test(string)) {
    const id = pattern.exec(string)[1];
    string = string.replace(delim(id), cache[parseInt(id) - 1]);
  }
  return skipEval ? string : eval("(" + string + ")");
}

export function getParams(fn: any): { param: string; default?: any }[] {
  const cache: string[] = [];

  let fnString: string = fn.toString().replace(/\/\*.*?\*\//g, "");
  fnString = encodeStrings(cache, fnString);

  const paramsRegex = encode(cache, fnString, patterns.prePatterns)
    .replace(/\n/g, "")
    .replace(/\s*async\s*/, "")
    .match(/(?:function\s*\((.*?)\)|\((.*?)\))|(.*?)\s*=>/);

  const params = paramsRegex[1] || paramsRegex[2] || paramsRegex[3] || "";

  return encode(cache, params, patterns.postPatterns)
    .split(",")
    .filter(function (i) {
      return i;
    }) // filter empty results
    .map(function (i) {
      i = decode(cache, i, true);
      const data = i.split("=");
      const obj: { param: string; default?: any } = {
        param: data[0].trim(),
      };
      if (data[1])
        obj.default = decode(
          cache,
          data.slice(1).join("="),
          true /* adicionado para default ser string */
        ).trim();
      return obj;
    });
}

export function getParamsSintetic(fn: any) {
  const resp = getParams(fn);

  return resp.reduce((prev: string[], curr) => {
    const param = curr.param;
    let dflt = "";
    if (curr.default) {
      dflt = curr.default.replaceAll("\n", "").replaceAll(" ", "");
    }

    const deflt = curr.default ? `=${dflt}` : "";
    prev.push(`${param}${deflt}`);
    return prev;
  }, []);
}
