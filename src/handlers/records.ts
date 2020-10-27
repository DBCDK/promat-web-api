import { RequestHandler } from "express";
import { RecordListItem, RecordSearchParams } from "../../promat-web-shared";
import { Records as mockRecords } from "../../promat-web-shared/example-data/records";

export const findRecordsHandler: RequestHandler<
  RecordSearchParams,
  RecordListItem[]
> = async (req, res) => {
  const response = mockRecords;
  res.send(response);
};
