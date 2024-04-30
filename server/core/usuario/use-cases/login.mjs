import jwtService from "jsonwebtoken";
import { config } from "../../../config/index.mjs";
import { passwordVerify } from "../../../../utils/string/password-verify.mjs";

export const login =
  (dataSource) =>
  async ({ email, password }, ctx) => {
    if (!email) {
      throw new Error("Email não informado");
    }

    if (!password) {
      throw new Error("Senha não informada");
    }

    const [record] = await dataSource.list({
      where: [["email", email]],
    });

    if (!record) {
      throw new Error("Email não cadastrado");
    }

    const passOk = passwordVerify(password, record.senha || "", "sha256");
    if (!passOk) {
      throw new Error("Senha incorreta");
    }

    const resp = {
      id: record.id || 0,
      email: record.email || "",
    };

    resp.token = jwtService.sign(resp, config.auth.secret, {
      expiresIn: config.auth.expiration,
    });

    ctx?.res.cookie("token", resp.token, {
      httpOnly: true,
      sameSite: "none",
      // secure: true,
      maxAge: config.auth.expiration * 1000,
    });

    return resp;
  };
