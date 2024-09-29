import { HttpRequest, HttpResponse } from './http-request';

export interface Controller {
  handle(httpRequest: HttpRequest): HttpResponse;
}
