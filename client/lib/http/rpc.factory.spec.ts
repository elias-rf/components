import { fetchMockRpc } from "../../../mocks/fetch-mock-rpc";
import { rpcFactory } from "./rpc.factory";

global.fetch = fetchMockRpc.fetch;

describe("rpcFactory", () => {
  const rpc = rpcFactory("cliente");
  beforeEach(() => {
    fetchMockRpc.reset();
  });

  it("schema", async () => {
    fetchMockRpc.mock("clienteSchema", {
      status: 200,
      body: { result: { id: 1 } },
    });
    const response = await rpc.query.schema();
    expect(fetchMockRpc.history()[0].url).toEqual(
      'http://localhost:3333/api/rpc?rpc={"jsonrpc":"2.0","id":1,"method":"clienteSchema"}'
    );
    expect(response).toEqual({ id: 1 });
  });

  it("clear", async () => {
    fetchMockRpc.mock("clienteClear", {
      status: 200,
      body: { result: { id: 1 } },
    });
    const response = await rpc.query.clear();
    expect(fetchMockRpc.history()[0].url).toEqual(
      'http://localhost:3333/api/rpc?rpc={"jsonrpc":"2.0","id":2,"method":"clienteClear"}'
    );
    expect(response).toEqual({ id: 1 });
  });

  it("list", async () => {
    fetchMockRpc.mock("clienteList", {
      status: 200,
      body: { result: { id: 1 } },
    });
    const response = await rpc.query.list({});
    expect(fetchMockRpc.history()[0].url).toEqual(
      'http://localhost:3333/api/rpc?rpc={"jsonrpc":"2.0","id":3,"method":"clienteList","params":{}}'
    );
    expect(response).toEqual({ id: 1 });
  });

  it("Read", async () => {
    fetchMockRpc.mock("clienteRead", {
      status: 200,
      body: { result: { id: 1 } },
    });
    const response = await rpc.query.read({});
    expect(fetchMockRpc.history()[0].url).toEqual(
      'http://localhost:3333/api/rpc?rpc={"jsonrpc":"2.0","id":4,"method":"clienteRead","params":{}}'
    );
    expect(response).toEqual({ id: 1 });
  });

  it("Create", async () => {
    fetchMockRpc.mock("clienteCreate", {
      status: 200,
      body: { result: { id: 1 } },
    });
    const response = await rpc.mutation.create({});
    expect(fetchMockRpc.history()[0].url).toEqual(
      "http://localhost:3333/api/rpc"
    );
    expect(fetchMockRpc.history()[0].options.body).toEqual(
      '{"jsonrpc":"2.0","id":5,"method":"clienteCreate","params":{}}'
    );
    expect(response).toEqual({ id: 1 });
  });
});
