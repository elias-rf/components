import { NextFunction, Request, Response } from "express";

type ResponseLog = Response & { contentBody: any };

let id = 1;

const resDotSendInterceptor =
  (res: ResponseLog, send: any) => (content: any) => {
    res.contentBody = content;
    res.send = send;
    res.send(content);
    return "";
  };

/**
 * Middleware recebe cookie JWT e decodifica para ctx.state.currentUser
 */
export const loggerMiddleFactory =
  (logger: any) =>
  (req: Request & { context: any }, res: any, next: NextFunction) => {
    const initialTime = Date.now();
    const agora = new Date().toJSON();

    res.send = resDotSendInterceptor(res, res.send);

    res.on("finish", () => {
      const finalTime = Date.now();
      const elapsed = finalTime - initialTime;

      const msg: any = {
        id: id++,
        data: agora,
        elapsed,
        user: req.context.currentUser,
        req: {
          ip: req.ip,
          method: req.method,
          hotname: req.hostname,
          baseUrl: req.baseUrl,
        },
        res: {
          statusCode: res.statusCode,
          body: res.contentBody,
        },
      };
      if (req.method === "GET") {
        msg.req.query = req.query;
      } else {
        msg.req.body = req.body;
      }
      if (msg.req.body?.params?.password) msg.req.body.params.password = "***";
      logger(msg);
    });
    next();
  };
