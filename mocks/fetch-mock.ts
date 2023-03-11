const map = new Map();
let history_: any[] = [];

export const fetchMock = {
  mock(matcher: string, response: any) {
    response.status = response.status || 200;
    map.set(matcher, response);
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
    return Promise.resolve({
      json: () => {
        if (!map.has(url)) {
          return `${url} não encontrado`;
        }
        const rsp = map.get(url).body;
        if (options && options.body) {
          const body = JSON.parse(options.body);
          rsp.id = body.id || "";
        }
        return Promise.resolve(rsp);
      },
      status: map.has(url) ? map.get(url)?.status : 404,
    });
  },
};
