import { join } from "path";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";
import etag from "koa-etag";
import historify from "koa-historify";
import logger from "koa-pino-logger";

import knexDbs from "./dal/connections";
import router from "./routes";
import authMiddle from "./middleware/auth-middle";

const app = new Koa();

app.use(authMiddle);

app.context.knexDbs = knexDbs;
app.use(logger());
app.use(etag());
app.use(bodyParser());
app.use(serve(join(__dirname, "../../public")));
app.use(router.routes());
app.use(router.allowedMethods());
app.use(
  historify(join(__dirname, "../../public/index.html"), {
    logger: console.log.bind(console),
  })
);

export default app;
