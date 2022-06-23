import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import * as MaskJson from 'mask-json';
import * as objectTrim from 'object-trim';
import { CustomLogger } from './custom_logger/custumLogger.service';
import { ServerResponse } from 'http';

const trim = (x) =>
  Array.isArray(x) || typeof x === 'string'
    ? x.slice(0, 4)
    : typeof x === 'object'
    ? objectTrim(x, 4)
    : x;

const redactions = ['password', 'data', 'records'];
const redact = MaskJson(redactions);

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private stringify = require('fast-json-stable-stringify');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const handlerId = `${context.getClass().name}/${context.getHandler().name}`;
    const logger = new CustomLogger(handlerId);

    const { body, hostname, method, originalUrl } = context.getArgByIndex(0);
    logger.log(
      `Request: ${this.stringify({
        method,
        originalUrl,
        body: redact(body),
        hostname,
      })}`,
    );

    const now = Date.now();
    return next.handle().pipe(
      tap((result) => {
        logger.log(
          `Trimmed response: ${
            result instanceof ServerResponse
              ? 'Express response object'
              : this.stringify(redact(trim(result)))
          }. +${Date.now() - now}ms`,
        );
      }),
      catchError((e) => {
        logger.error(
          'Error handling the request',
          e.message?.stack || e?.stack,
        );
        throw e;
      }),
    );
  }
}
