import { CookieSerializeOptions, serialize } from "cookie";
import { Response } from "express";
/**
 * This sets `cookie` on `res` object
 */
export function setCookie(
  res: Response,
  name: string,
  value: string,
  options: CookieSerializeOptions = {}
) {
  options.path = options.path || "/";
  if (options.maxAge) {
    options.expires = new Date(Date.now() + options.maxAge * 1000);
  }

  res.setHeader("Set-Cookie", serialize(name, value, options));
}

export function resetCookie(res: Response, name: string) {
  res.setHeader(
    "Set-Cookie",
    serialize(name, "", {
      path: "/",
      maxAge: -1,
      expires: new Date(Date.now() - 1000),
    })
  );
}
