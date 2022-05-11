import logger from "./logger";
import idGenFactory from "./id-gen.factory";

const idGen = idGenFactory();

export default function audit(req: any, res: any, next: any) {
  var oldWrite = res.write;
  var oldEnd = res.end;
  var oldJson = res.json;
  var chunks: any = [];

  // Log start time of request processing
  req.timestamp = new Date();

  res.write = function (chunk: any) {
    logger.info("WRITE " + chunk);
    chunks.push(chunk.toString());
    oldWrite.apply(res, arguments);
  };

  // decorate response#json method from express
  res.json = function (bodyJson: any) {
    logger.info("JSON " + bodyJson);
    res._bodyJson = bodyJson;
    oldJson.apply(res, arguments);
  };

  // decorate response#end method from express
  res.end = function (chunk: any) {
    res.timestamp = new Date();

    res._bodyStr = Buffer.from(chunks).toString("utf8");

    logger.info({
      id: idGen(req),
      req: {
        body: req.body,
        baseUrl: req.baseUrl,
        cookies: req.cookies,
        ip: req.ip,
        method: req.method,
        path: req.path,
        query: req.query,
      },
    });
    oldEnd.apply(res, arguments);
  };

  next();
}
