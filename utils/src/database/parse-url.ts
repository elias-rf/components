import { URL } from "node:url";

export function parseUrl(urlString: string) {
  const myUrl = new URL(urlString);
  const rsp = {
    client: myUrl.protocol.substring(0, myUrl.protocol.length - 1),
    connection: {
      host: myUrl.hostname,
      port: parseInt(myUrl.port) || 1433,
      user: myUrl.username || "",
      password: myUrl.password,
      database: "",
    },
  };
  return rsp;
}
