import { app } from "./app";

async function start() {
  const port = normalizePort(process.env.PORT || "3000");
  // const httpServer = http.createServer();

  // httpServer.on("error", onError);
  // httpServer.on("listening", onListening);
  // httpServer.on("request", app.callback());
  // await httpServer.listen({ port });

  /**
   * Normalize a port into a number, string, or false.
   */

  function normalizePort(val: string) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }

  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });

  /**
   * Event listener for HTTP server "error" event.
   */

  // function onError(error: any) {
  //   if (error.syscall !== "listen") {
  //     throw error;
  //   }

  //   var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  //   // handle specific listen errors with friendly messages
  //   switch (error.code) {
  //     case "EACCES":
  //       console.error(bind + " requires elevated privileges");
  //       process.exit(1);
  //       break;
  //     case "EADDRINUSE":
  //       console.error(bind + " is already in use");
  //       process.exit(1);
  //       break;
  //     default:
  //       throw error;
  //   }
  // }

  /**
   * Event listener for HTTP server "listening" event.
   */

  // function onListening() {
  //   logger.info(`🚀 Server ready at http://localhost:${port}`);
  // }
}
start();
