const http = require("http");

export async function sendLog(msg: any) {
  const options = {
    protocol: "http:",
    hostname: "localhost",
    port: 8888,
    method: "POST",
    path: "/",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic TOKEN",
    },
  };

  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });

      res.on("end", () => {
        console.log(body);
        if (res.statusCode / 2 === 100) {
          resolve(body);
        } else {
          resolve("Failure");
        }
      });
      res.on("error", () => {
        reject(Error("HTTP call failed"));
      });
    });

    // The below 2 lines are most important part of the whole snippet.
    const body = typeof msg === "string" ? { info: msg } : msg;
    body.time = new Date();
    req.write(JSON.stringify(body));
    req.end();
  });
}
