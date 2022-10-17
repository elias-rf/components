const map = new Map();
let history_: any[] = [];

/**
 * Mock para RPC fetch
 */
export const fetchMockRpc = {
  /**
   * inicializa o mock
   *
   * @param {string} matcher Rpc.method que será chamado
   * @param {*} response Fetch response do method
   */
  mock(matcher: string, response: any) {
    response.status = response.status || 200;
    if (map.has(matcher)) map.delete(matcher);
    map.set(matcher, response);
  },
  /**
   * histórico de chamadas do fetch
   *
   * @param {number} [index] Retorna uma chamada específica ou array com todas
   * @return {*}
   */
  history(index?: number) {
    if (index !== undefined) return history_[index];
    return [...history_];
  },
  /**
   * retorna objeto com todos os métodos e respostas cadastrados
   *
   * @return {*}
   */
  map() {
    return JSON.stringify(Object.fromEntries(map), null, 2);
  },
  /**
   * Reseta o mock
   *
   */
  reset() {
    map.clear();
    history_ = [];
  },
  /**
   * mock do fetch que retorna os metodos cadastrados
   *
   * @param {*} url
   * @param {*} [options]
   * @return {*}  {Promise<any>}
   */
  fetch(url: any, options?: any): Promise<any> {
    history_.push({ url, options });
    let _status = 200;
    let _rsp: any = "";
    if (options && options.body) {
      const body = JSON.parse(options.body);

      if (!map.has(body.method)) {
        return Promise.reject(`${body.method} não encontrado`);
      }
      _rsp = map.get(body.method).body;
      _rsp.jsonrpc = "2.0";
      _rsp.id = body.id || "";
      _rsp.method = body.method;
    }
    return Promise.resolve({
      json: () => {
        return Promise.resolve(_rsp);
      },
      status: _status,
    });
  },
};
