import { Logger, Injectable, Scope } from '@nestjs/common';
import { ContextService } from './context.service';
import { EmptyLogger } from './emptyLogger.service';

@Injectable({ scope: Scope.TRANSIENT })
export class CustomLogger extends Logger {
  constructor(context?: string) {
    super(context);
    if (process.env.NODE_ENV === 'test') {
      return new EmptyLogger(context);
    }
  }
  log(message: string, context?: string) {
    super.log(message, CustomLogger.getContextTrace(context));
  }

  warn(message: string, context?: string) {
    super.warn(message, CustomLogger.getContextTrace(context));
  }

  error(message: string, trace: string, context?: string) {
    super.error(message, trace, CustomLogger.getContextTrace(context));
  }

  debug(message: string, context?: string) {
    super.debug(message, CustomLogger.getContextTrace(context));
  }

  private static getRequestId(): string {
    const id = ContextService.get(ContextService.KEYS.REQUEST_ID);
    return id ? `${id}] [` : '';
  }

  private static getContextTrace(context?: string): string {
    const contextMessage = context ? `[ ${context}] ${context}` : '';
    return `${CustomLogger.getRequestId()}${contextMessage}`;
  }
}
