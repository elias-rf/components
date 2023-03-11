import { NextFunction, Request } from "express";

export function errMiddle(
  err: any,
  req: Request,
  res: any,
  next: NextFunction
) {
  // you can error out to stderr still, or not; your choice
  console.error(err);

  // body-parser will set this to 400 if the json is in error
  if (err.status === 400)
    return res.status(err.status).send("Dude, you messed up the JSON");

  return next(err); // if it's not a 400, let the default error handling do it.
}
