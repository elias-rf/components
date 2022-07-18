import Koa from "koa";
import bodyParser from "koa-bodyparser";
import etag from "koa-etag";
import historify from "koa-historify";
import logger from "koa-pino-logger";
import serve from "koa-static";
import { join } from "path";
import { connections } from "./dal/connections";
import { authMiddle } from "./middleware/auth-middle";
import { router } from "./routes";

export const app = new Koa();

app.use(authMiddle);

app.context.knexDbs = connections;
app.use(logger());
app.use(etag());
app.use(bodyParser());
app.use(serve(join(__dirname, "../../../public")));
app.use(router.routes());
app.use(router.allowedMethods());
app.use(
  historify(join(__dirname, "../../../public/index.html"), {
    logger: console.log.bind(console),
  })
);
