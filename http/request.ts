/**
 * Permite fazer requisições HTTP usando como base a Fetch.api
 */

type Headers = { [key: string]: string };
type Request = {
  method: string;
  url: string;
  headers: Headers;
  body?: string;
  query?: any;
};

type Response = "json" | "blob" | "text" | "raw";

/**
 * Make a generic request
 *
 * @param  request Request to be made. Must be of the form: {method, url, query [optional]}
 * @param responseType any value of the RESPONSE_TYPES map. Defaults to 'json'
 * @private
 */
function makeRequest({
  request,
  responseType = "json",
}: {
  request: Request;
  responseType?: Response;
}) {
  const headers = request.headers || {};

  // Don't set the body if it's a GET request as it will crash on Microsoft Edge
  const params: { headers: Headers; method: string; body?: any } = {
    headers,
    method: request.method || "GET",
  };
  if (params.method !== "GET") {
    params.body = request.body || null;
  }

  // Append query params
  if (request.query) {
    const qs = Object.keys(request.query)
      .map((k) => {
        let keyValue = `${encodeURIComponent(k)}=`;
        if (Array.isArray(request.query[k])) {
          keyValue += request.query[k].join(`&${encodeURIComponent(k)}=`);
        } else if (typeof request.query[k] === "object") {
          keyValue += encodeURIComponent(JSON.stringify(request.query[k]));
        } else {
          keyValue += encodeURIComponent(request.query[k]);
        }
        return keyValue;
      })
      .join("&");
    request.url += `?${qs}`;
  }

  // Do the API Request
  return fetch(request.url, params).then((res) => {
    switch (responseType) {
      case "json":
        return res.json();
      case "blob":
        return res.blob();
      case "text":
        return res.text();
      default:
        return res;
    }
  });
}

const api = {
  baseUrl: "",
  headers: {},
  RESPONSE_TYPES: { json: "json", blob: "blob", text: "text", raw: "raw" },

  /**
   * Monta um request com Query e GET como padrão
   */
  formRequestQuery({
    method = "GET",
    url,
    headers,
    query,
  }: {
    method?: string;
    url: string;
    headers?: Headers;
    query?: any;
  }) {
    const theUrl =
      url.indexOf("http") > -1 || url.indexOf("www") > -1
        ? url
        : `${this.baseUrl || ""}${url}`;
    return {
      method,
      url: theUrl,
      headers: Object.assign({}, this.headers, headers),
      query,
    };
  },

  /**
   * Monta um request com Data stringified e POST como default
   */
  formRequestData({
    method,
    url,
    headers,
    data,
  }: {
    method: string;
    url: string;
    headers?: Headers;
    data: any;
  }) {
    const theUrl =
      url.indexOf("http") > -1 || url.indexOf("www") > -1
        ? url
        : `${this.baseUrl || ""}${url}`;
    return {
      method,
      url: theUrl,
      body: JSON.stringify(data),
      headers: Object.assign(
        {},
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        this.headers,
        headers
      ),
    };
  },

  /**
   * Monta um request do tipo POST com Data
   */
  formPostRequest({
    url,
    headers,
    data,
  }: {
    url: string;
    headers?: Headers;
    data: any;
  }) {
    const theUrl =
      url.indexOf("http") > -1 || url.indexOf("www") > -1
        ? url
        : `${this.baseUrl || ""}${url}`;
    return {
      method: "POST",
      url: theUrl,
      body: data,
      headers: Object.assign({}, this.headers, headers),
    };
  },

  /**
   * Set a global baseURL to prefix all URLs with
   * @param baseUrl - The base URL
   */
  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  },

  /**
   * Set global headers instead of setting the same headers on each call.
   * @param headers - headers object
   */
  setHeaders(headers: Headers) {
    this.headers = {};
    if (typeof headers === "object") {
      this.headers = headers;
    }
  },

  /**
   * Make a GET request
   *
   * @param  url API url to make request to
   * @param headers HTTP Headers
   * @param query Query object
   * @param responseType any value of the RESPONSE_TYPES map. Defaults to 'json'
   */
  get({
    url,
    headers,
    query,
    responseType,
  }: {
    url: string;
    headers?: Headers;
    query?: any;
    responseType?: Response;
  }) {
    const request = this.formRequestQuery({ url, headers, query });

    return makeRequest({
      request,
      responseType,
    });
  },

  /**
   * Make a PUT request
   *
   * @param url API url to make request to
   * @param data The data to be updated
   * @param headers HTTP Headers
   * @param responseType any value of the RESPONSE_TYPES map. Defaults to 'json'
   */
  put({
    url,
    data,
    headers,
    responseType,
  }: {
    url: string;
    data: any;
    headers?: Headers;
    responseType?: Response;
  }) {
    const request = this.formRequestData({
      method: "PUT",
      url,
      headers,
      data,
    });
    return makeRequest({
      request,
      responseType,
    });
  },

  /**
   * Make a PATCH request
   *
   * @param {String} url API url to make request to
   * @param {Object} data The data to be updated
   * @param {Object} [headers] HTTP Headers
   * @param {String} [responseType] any value of the RESPONSE_TYPES map. Defaults to 'json'
   */
  patch({
    url,
    data,
    headers,
    responseType,
  }: {
    url: string;
    data: any;
    headers?: Headers;
    responseType?: Response;
  }) {
    const request = this.formRequestData({
      method: "PATCH",
      url,
      headers,
      data,
    });
    return makeRequest({
      request,
      responseType,
    });
  },

  /**
   * Make a POST JSON request
   *
   * @param url API url to make request to
   * @param data The data to be inserted
   * @param headers HTTP Headers
   * @param responseType any value of the RESPONSE_TYPES map. Defaults to 'json'
   */
  post({
    url,
    data,
    headers,
    responseType,
  }: {
    url: string;
    data: any;
    headers?: Headers;
    responseType?: Response;
  }) {
    const request = this.formRequestData({
      method: "POST",
      url,
      headers,
      data,
    });
    return makeRequest({
      request,
      responseType,
    });
  },

  /**
   * Make a POST form data request
   *
   * @param url API url to make request to
   * @param data Form data to be inserted
   * @param headers HTTP Headers
   */
  postForm({
    url,
    data,
    headers,
  }: {
    url: string;
    data: any;
    headers?: Headers;
  }) {
    const request = this.formPostRequest({ url, data, headers });
    return makeRequest({ request });
  },

  /**
   * Make a DELETE request
   *
   * @param url API url to make request to
   * @param headers HTTP Headers
   * @param query Query string
   */
  delete({
    url,
    headers,
    query,
  }: {
    url: string;
    headers?: Headers;
    query?: any;
  }) {
    const request = this.formRequestQuery({
      method: "DELETE",
      url,
      headers,
      query,
    });
    return makeRequest({ request });
  },
};

export default api;
export const RESPONSE_TYPES = api.RESPONSE_TYPES;
