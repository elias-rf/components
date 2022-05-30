import jwtDecode from "./jwt-decode";
import config from "../config/index";

import { CurrentUser } from "../..";

export default function currentUser(token: string): CurrentUser {
  if (!token) return {};
  try {
    return jwtDecode(token, config.auth.secret);
  } catch (error) {
    return {};
  }
}
