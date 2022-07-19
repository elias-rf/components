import config from "../config/index";
import jwtDecode from "./jwt-decode";

import { CurrentUser } from "../..";

export function currentUser(token: string): CurrentUser {
  if (!token) return {};
  try {
    return jwtDecode(token, config.auth.secret);
  } catch (error) {
    return {};
  }
}
