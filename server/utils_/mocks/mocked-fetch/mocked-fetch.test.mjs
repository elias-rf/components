import { describe, expect, test } from "vitest";
import { mockedFetch } from "./mocked-fetch.mjs";

describe("mockedFetch", () => {
  test("should return a mocked fetch", () => {
    expect(mockedFetch).toBeDefined();
  });

  test("deve retornar 404 para path inexistente", async () => {
    mockedFetch.reset();
    const response = await fetch("http://teste.com");
    const body = await response.json();
    expect(mockedFetch.history()).toEqual([
      {
        request: { url: "http://teste.com", options: {} },
        response: { body: {}, options: { status: 404 } },
      },
    ]);
    expect(response.status).toEqual(404);
    expect(body).toEqual({});
  });

  test("deve mockar um path", async () => {
    mockedFetch.reset();
    const url = "http://skillrazr.com/todos";
    mockedFetch.add(async (request) => {
      if (request.url.indexOf(url) >= 0) {
        return { body: { todos: [] } };
      }
    });

    const response = await fetch(url);
    const body = await response.json();

    expect(mockedFetch.history()).toEqual([
      {
        request: { url, options: {} },
        response: { body: { todos: [] } },
      },
    ]);
    expect(response.status).toEqual(200);
    expect(body).toEqual({ todos: [] });
  });

  test("deve mockar várias chamadas", async () => {
    mockedFetch.reset();
    const url = "http://skillrazr.com";
    mockedFetch.add(async (request) => {
      if (
        request.url.indexOf(url) >= 0 &&
        request.options.body === '{"method":"read"}'
      ) {
        return { body: { todo: {} } };
      }
    });
    mockedFetch.add(async (request) => {
      if (
        request.url.indexOf(url) >= 0 &&
        request.options.body === '{"method":"list"}'
      ) {
        return { body: { todos: [] } };
      }
    });

    const responseRead = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ method: "read" }),
    });
    const bodyRead = await responseRead.json();
    expect(bodyRead).toEqual({ todo: {} });

    const responseList = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ method: "list" }),
    });
    const bodyList = await responseList.json();
    expect(bodyList).toEqual({ todos: [] });

    expect(mockedFetch.history()).toEqual([
      {
        request: {
          url,
          options: { method: "POST", body: '{"method":"read"}' },
        },
        response: { body: { todo: {} } },
      },
      {
        request: {
          url,
          options: { method: "POST", body: '{"method":"list"}' },
        },
        response: { body: { todos: [] } },
      },
    ]);
  });
});
