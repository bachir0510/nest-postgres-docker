import * as ContextStore from 'request-context';
import { v1 as uuidv1 } from 'uuid';

export class ContextService {
  static KEYS = {
    REQUEST_ID: 'request:id',
    REQUEST_IP: 'request:ip',
  };

  static middleware(req, _res, next) {
    ContextService.set(ContextService.KEYS.REQUEST_ID, uuidv1());
    ContextService.set(ContextService.KEYS.REQUEST_IP, req.ip);
    next();
  }

  static set(key: string, value: any) {
    ContextStore.set(key, value);
  }

  static get(key: string): any {
    return ContextStore.get(key);
  }
}
