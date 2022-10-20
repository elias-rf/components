const map = new Map();
let history_: any[] = [];

export const fetchMockRpc = {
  mock(method: string, response: any) {
    response.status = response.status || 200;
    if (map.has(method)) map.delete(method);
    map.set(method, response);
  },
  history(index?: number) {
    if (index !== undefined) return history_[index];
    return history_;
  },
  map() {
    return JSON.stringify(Object.fromEntries(map), null, 2);
  },
  reset() {
    map.clear();
    history_ = [];
  },
  fetch(url: any, options?: any): Promise<any> {
    history_.push({ url, options });
    let _rsp: any = "";
    if (options && options.body) {
      const body = JSON.parse(options.body);
      const { method } = body;
      if (!map.has(method)) {
        return Promise.reject(`${body.method} não encontrado`);
      }
      _rsp = map.get(method).body;
      _rsp.jsonrpc = "2.0";
      _rsp.id = body.id || "";
      _rsp.method = body.method;
    }
    return Promise.resolve({
      json: () => {
        return Promise.resolve(_rsp);
      },
      status: map.has(_rsp.method) ? map.get(_rsp.method)?.status : 404,
    });
  },
};
