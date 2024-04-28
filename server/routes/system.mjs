import * as _ from "lodash-es";
import { config } from "../config/index.mjs";

export const systemRoute = {
  get: (req, res) => {
    res.send({
      enviroment: process.env.NODE_ENV,
      config: _.omit(config, [
        "auth.secret",
        "db.sys.connection.user",
        "db.sys.connection.password",
      ]),
      token: req.cookies.token || "",
    });
  },
};
