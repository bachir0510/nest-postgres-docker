import { Injectable, Scope, Logger } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class EmptyLogger extends Logger {
  constructor(context?: string) {
    super(context);
  }
  log(message: string, context?: string) {}

  warn(message: string, context?: string) {}

  error(message: string, trace: string, context?: string) {}

  debug(message: string, context?: string) {}

  verbose(message: string, context?: string) {}
}
