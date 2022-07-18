const map = new Map();
let history_: any[] = [];

export const fetchMock = {
  mock(matcher: string, response: any) {
    response.status = response.status || 200;
    map.set(matcher, response);
  },
  get(matcher: string, response: any) {},
  post(matcher: string, response: any) {},
  history(index?: number) {
    if (index !== undefined) return history_[index];
    return history_;
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
          console.log(
            `🚀 ~ file: fetch-mock.ts ~ line 27 ~ fetch ~ `,
            `${url} não encontrado`
          );
          return `${url} não encontrado`;
        }
        const rsp = map.get(url).body;
        rsp.id = JSON.parse(options.body).id;
        return Promise.resolve(rsp);
      },
      status: map.has(url) ? map.get(url)?.status : 404,
    });
  },
};
