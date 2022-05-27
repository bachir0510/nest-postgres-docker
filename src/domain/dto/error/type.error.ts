import { ApiErrorDto } from './api.error.dto';

// OWN API ERRORS (2000-2999)
export const ApiErrors = {
  API_IN_MAINTENANCE: {
    code: 2999,
    message: 'Api is in maintenance mode',
  },

  UNKNOWN_API_ERROR: {
    code: 2000,
    message: 'Something has failed.',
  } as IDomainError,

  UNAUTHORIZED_API_ERROR: {
    code: 2001,
    message: 'Unauthorized user.',
  } as IDomainError,

  INVALID_INPUT: {
    code: 2002,
    message: 'Invalid/Empty input',
  } as IDomainError,

  UNKNOWN_RESPONSE_ERROR: {
    code: 2003,
    message: 'The external service returned an unknown response',
  } as IDomainError,

  ROUTE_NOT_FOUND: {
    code: 2004,
    message: 'The route cannot be found',
  } as IDomainError,

  BAD_GATEWAY: {
    code: 2005,
    message: 'Bad Gateway',
  } as IDomainError,

  FORBIDDEN_API_ERROR: {
    code: 2006,
    message: 'Forbidden access',
  } as IDomainError,
};

export const DomainErrors = {
  ...ApiErrors,
};

export interface IDomainError {
  code: number;
  message: string;
  extraInfo?: object;
}

export class DomainError extends Error {
  constructor(private readonly error: IDomainError) {
    super(error.message);
  }

  public toApiError(): ApiErrorDto {
    return this.error;
  }

  public static getError(errorCode: any): IDomainError {
    return DomainErrors[errorCode] || DomainErrors.UNKNOWN_API_ERROR;
  }
}
