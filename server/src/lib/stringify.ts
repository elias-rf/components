const FUNCTION_COMPRESS_OPTIONS = { parse: { bare_returns: true } };
const FUNCTION_COMPRESS_NAMED = "const f=";
const FUNCTION_COMPRESS_NAMED_LENGTH = FUNCTION_COMPRESS_NAMED.length;

// regexp collection
const SYMBOL_STRIP = /Symbol\((.*)\)/;
const IRREGULAR_KEY = /^[^a-zA-Z]/;
const SQUARED_IN_KEY = /^\w[\d\w_]*$/;
const STRIP_TRAILING_SEMICOLON = /;+$/;

type TOptions = {
  safe?: boolean;
  endline?: string;
  spacing?: string;
  keyQuote?: string;
  valueQuote?: string;
  keySpace?: boolean;
  replace?: (key: string, value: any) => any;
  filter?: (key: string, value: any) => any;
  discard?: boolean;
  compress?: boolean;
};

const uglify = {
  minify(p: any) {
    return p;
  },
};

/**
 *
 * @param {*} data
 * @param {Boolean} options.safe works in safe mode, so will not throws exception for circularity; default false
 * @param {String} options.endline end line with; default '\n'
 * @param {String} options.spacing indentation string; default '  ' (two spaces)
 * @param {String} options.keyQuote character used for quote keys; default null - no quotes
 * @param {String} options.valueQuote character used for quote values; default "
 * @param {Boolean} options.keySpace add space after key: ; default true
 * @param {function(key:String, value:*)} options.replace replace by key or value
 * @param {function(key:String, value:*)} options.filter filter by key or value
 * @param {Boolean} options.discard discard null and undefined values; default false
 * @param {Boolean} options.compress compress data like function, Date, Buffer; default false
 */
export function stringify(data: any, options?: TOptions) {
  const _done = {
    values: [],
    paths: [],
  };
  const _counter = {
    object: 0,
    array: 0,
  };
  let _keySpace: any;

  function validate(options?: TOptions) {
    if (!options) {
      // default options
      options = {
        endline: "\n",
        spacing: "  ",
        keyQuote: undefined,
        keySpace: true,
        valueQuote: '"',
        safe: false,
        replace: undefined,
        filter: undefined,
        discard: false,
        compress: false,
      };
    } else {
      if (!options.endline && options.endline !== "") {
        options.endline = "\n";
      }
      if (!options.spacing && options.spacing !== "") {
        options.spacing = "  ";
      }
      if (!options.valueQuote) {
        options.valueQuote = '"';
      }
      if (
        options.replace !== undefined &&
        typeof options.replace !== "function"
      ) {
        throw new Error("options.replace is not a function");
      }
      if (
        options.filter !== undefined &&
        typeof options.filter !== "function"
      ) {
        throw new Error("options.filter is not a function");
      }
    }

    _keySpace = options.keySpace ? " " : "";
    return options;
  }

  function replace(str: string, find: string, replace: string) {
    if (str.indexOf(find) === -1) {
      return str;
    }
    return str.split(find).join(replace);
  }

  function circularity(val: any, path: any) {
    const i = _done.values.indexOf(val);
    if (i !== -1 && path.indexOf(_done.paths[i]) === 0) {
      if (!options?.safe) {
        throw new Error("Circular reference @ " + path);
      }
      return true;
    }
    _done.values.push(val);
    _done.paths.push(path);
    return false;
  }

  const _serialize = {
    function: function (obj: any) {
      if (options?.compress) {
        let _min;
        try {
          _min = uglify.minify(obj.toString(), FUNCTION_COMPRESS_OPTIONS);
          if (!_min.code) {
            _min = uglify.minify(
              FUNCTION_COMPRESS_NAMED + obj.toString(),
              FUNCTION_COMPRESS_OPTIONS
            );
            _min.code = _min.code.substr(FUNCTION_COMPRESS_NAMED_LENGTH);
          }
          const _code = _min.code; // ? || obj.toString()
          return _code.replace(STRIP_TRAILING_SEMICOLON, "");
        } catch (error) {
          console.warn(
            "unable to compress function",
            obj.toString(),
            _min.error
          );
          return obj.toString();
        }
      }
      return obj.toString();
    },
    number: function (n: any) {
      return n;
    },
    string: function (str: any) {
      if (str.indexOf("\n") !== -1) {
        str = str.split("\n").join("\\n");
      }
      if (str.indexOf("\t") !== -1) {
        str = str.split("\t").join("\\t");
      }
      return quote(str, options?.valueQuote);
    },
    boolean: function (value: any) {
      return value ? "true" : "false";
    },
    null: function () {
      return "null";
    },
    undefined: function () {
      return "undefined";
    },
    deferred: function (val: any) {
      return val.toString();
    },
    date: function (date: any) {
      if (options?.compress) {
        return "new Date(" + date.getTime() + ")";
      }
      return (
        "new Date(" +
        options?.valueQuote +
        date.toISOString() +
        options?.valueQuote +
        ")"
      );
    },
    regexp: function (obj: any) {
      return obj.toString();
    },
    buffer: function (obj: any) {
      return (
        "Buffer.from(" +
        options?.valueQuote +
        obj.toString("base64") +
        options?.valueQuote +
        ")"
      );
    },
    symbol: function (symbol: any) {
      return (
        "Symbol(" +
        options?.valueQuote +
        symbol.toString().match(SYMBOL_STRIP)[1] +
        options?.valueQuote +
        ")"
      );
    },
    map: function (map: any) {
      const entries = [];
      for (const entry of map) {
        entries.push(entry);
      }
      if (entries.length < 1) {
        return "new Map()";
      }
      return `new Map(${_serialize.array(entries, 2)})`;
    },
    set: function (set: any) {
      const entries = [];
      for (const entry of set) {
        entries.push(entry);
      }
      if (entries.length < 1) {
        return "new Set()";
      }
      return `new Set(${_serialize.array(entries, 2)})`;
    },
    object: function (obj: any, deep: any, path = "{}") {
      _counter.object++;

      const _spacing0 = spacing(deep);
      const _spacing1 = _spacing0 + options?.spacing;

      if (circularity(obj, path)) {
        return (
          options?.endline +
          _spacing1 +
          "[Circularity]" +
          options?.endline +
          _spacing0
        );
      }

      const _out = [];
      for (const key in obj) {
        const _path = path + "." + key;
        const _item = item(key, obj[key], deep + 1, _path);

        // if item is discarded by filtering
        if (!_item) {
          continue;
        }

        // wrap strange key with quotes
        if (
          _item.key.match(IRREGULAR_KEY) ||
          !_item.key.match(SQUARED_IN_KEY)
        ) {
          _item.key = quote(key, options?.keyQuote || '"');
        }
        _out.push(
          options?.endline +
            _spacing1 +
            _item.key +
            ":" +
            _keySpace +
            _item.value
        );
      }
      return "{" + _out.join(",") + options?.endline + _spacing0 + "}";
    },
    array: function (array: any, deep: any, path = "[]"): any {
      _counter.array++;
      if (circularity(array, path)) {
        return "[Circularity]";
      }

      const _spacing0 = spacing(deep);
      const _spacing1 = _spacing0 + options?.spacing;

      const _out = [];
      for (let i = 0; i < array.length; i++) {
        const _path = path + "." + i;
        const _item = item(null, array[i], deep + 1, _path);
        if (_item) {
          _out.push(options?.endline + _spacing1 + _item.value);
        }
      }
      return "[" + _out.join(",") + options?.endline + _spacing0 + "]";
    },
  };

  function spacing(deep: any) {
    let spacing = "";
    for (let i = 0; i < deep - 1; i++) {
      spacing += options?.spacing;
    }
    return spacing;
  }

  function quote(value: any, quote: any) {
    return quote + replace(value, quote, "\\" + quote) + quote;
  }

  function item(key: any, value: any, deep = 1, path?: any) {
    if (options?.discard && (value === undefined || value === null)) {
      return null;
    }

    if (options?.filter && !options?.filter(key, value)) {
      return null;
    }

    if (options?.replace) {
      ({ key, value } = options.replace(key, value));
    }

    let _type: string = typeof value;
    if (_type === "object") {
      if (value instanceof Array) {
        _type = "array";
      } else if (value instanceof Date) {
        _type = "date";
      } else if (value instanceof RegExp) {
        _type = "regexp";
      } else if (value instanceof Buffer) {
        _type = "buffer";
      } else if (value instanceof Map) {
        _type = "map";
      } else if (value instanceof Set) {
        _type = "set";
      } else if (value instanceof stringify._deferred) {
        _type = "deferred";
      } else if (value === null) {
        _type = "null";
      }
    }

    return { key, value: _serialize[_type](value, deep, path) };
  }

  options = validate(options);
  const _item = item(null, data);
  return _item?.value;
}

// deferred type
stringify.deferred = function (val: any) {
  this.val = val;
  return new stringify._deferred(val);
};

stringify._deferred = function (val: any) {
  this.val = val;
};

stringify._deferred.prototype.toString = function () {
  return this.val;
};

// preset options
stringify.options = {
  json: {
    keyQuote: '"',
    keySpace: true,
  },
  standardjs: {
    keySpace: true,
    valueQuote: "'",
  },
  compact: {
    valueQuote: "'",
    endline: "",
    spacing: "",
  },
};
