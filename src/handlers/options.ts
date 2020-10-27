import { RequestHandler } from "express";
import { Options } from "../../promat-web-shared";
import { mockOptions } from "../../promat-web-shared/example-data/options";

export const getOptionsHandler: RequestHandler<{}, Options> = async (
  req,
  res
) => {
  const response = mockOptions;
  res.send(response);
};
