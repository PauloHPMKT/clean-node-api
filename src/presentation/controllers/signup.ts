import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http';
import { Controller } from '../protocols/controller';
import { HttpRequest, HttpResponse } from '../protocols/http-request';

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'));
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'));
    }
  }
}
