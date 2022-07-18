import { Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';

@Injectable()
export class ComparePassword {
  async call(password: string, userPassword: string): Promise<boolean> {
    return compare(password, userPassword);
  }
}
