import { RequestHandler } from "express";
import { UserResponse } from "../../promat-web-shared";
import { reviewersResponse } from "../../promat-web-shared/example-data/reviewersResponse";

export const getReviewersHandler: RequestHandler<{}, UserResponse[]> = async (
  req,
  res
) => {
  req.params;
  const response = reviewersResponse;
  res.send(response);
};
