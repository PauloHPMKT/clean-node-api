import { HttpResponse } from '../protocols/http-request';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});
