# Estrutura da Intranet

::: mermaid
graph TD;

subgraph Server
  index-->app;
  app-->routes;
  routes-->rpc.router;
  rpc.router-->rpc;
  rpc-->rpcs;
  rpcs-->resourceRpcFactory;
  resourceRpcFactory-->resourceModelFactory
  resourceModelFactory-->crudFactory
  resourceModelFactory-->resourceMethodsFactory
end

subgraph Client
    resourceStore --> resourceService
    resourceService --> rpcFactory
    rpcFactory --> fetcherRpc
    fetcherRpc --> rpcClient
end
fetcherRpc == rede === routes
:::
