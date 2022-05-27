import {
  Catch,
  ArgumentsHost,
  HttpException,
  UnprocessableEntityException,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { ApiErrors, DomainError } from '../../domain/dto/error/type.error';
import { CustomLogger } from '../logging';


@Catch()
export class ErrorFilter extends BaseExceptionFilter {
  private stringify = require('fast-json-stable-stringify');

  private readonly logger = new CustomLogger(ErrorFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    this.logger.warn(`Exception thrown: ${this.stringify(exception)}`);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let status = 500;
    let res = ApiErrors.UNKNOWN_API_ERROR;
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const aux = exception.getResponse();
      res =
        aux instanceof DomainError
          ? aux.toApiError()
          : this.httpStatuscodeToApiError(status);
    }
    if (exception instanceof UnprocessableEntityException) {
      status = exception.getStatus();
      res = ApiErrors.INVALID_INPUT;
    }
    if (exception instanceof DomainError) {
      res = exception.toApiError();
      status = this.ApiErrorcodeToHttpStatus(res.code);
    }

    if (exception instanceof UnauthorizedException) {
      status = exception.getStatus();
      res = ApiErrors.UNAUTHORIZED_API_ERROR;
    }

    if (exception instanceof ForbiddenException) {
      status = exception.getStatus();
      res = ApiErrors.FORBIDDEN_API_ERROR;
    }

    this.logger.warn(
      `Answered with HTTP status ${status} and the following payload: ${this.stringify(
        res,
      )}`,
    );
    response.status(status).json(res);
  }

  private httpStatuscodeToApiError(status: any) {
    switch (status) {
      case 503:
        return ApiErrors.API_IN_MAINTENANCE;
      case 404:
        return ApiErrors.ROUTE_NOT_FOUND;
      case 502:
        return ApiErrors.BAD_GATEWAY;
      default:
        return ApiErrors.UNKNOWN_API_ERROR;
    }
  }

  private ApiErrorcodeToHttpStatus(errorCode: number): number {
    switch (errorCode) {
      case ApiErrors.API_IN_MAINTENANCE.code:
        return 503;
      case ApiErrors.UNKNOWN_API_ERROR.code:
      case ApiErrors.UNKNOWN_RESPONSE_ERROR.code:
        return 500;
      default:
        return 400;
    }
  }
}
