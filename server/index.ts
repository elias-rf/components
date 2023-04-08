// import { logger } from "../utils/logger";
import { app } from "./app";
import { config } from "./config";
import "./global";
// import { Server, IncomingMessage, ServerResponse } from "http";
// async function start() {
//   const port = normalizePort(process.env.PORT || "3000");

//   /**
//    * Normalize a port into a number, string, or false.
//    */

//   function normalizePort(val: string) {
//     const port = parseInt(val, 10);
//     if (isNaN(port)) {
//       // named pipe
//       return val;
//     }
//     if (port >= 0) {
//       // port number
//       return port;
//     }
//     return false;
//   }

//   app.listen(port, () => {
//     logger(`🚀 Server ready at http://localhost:${port}`);
//   });
// }

const start = async () => {
  try {
    await app.listen({ host: "0.0.0.0", port: config.app.port });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
