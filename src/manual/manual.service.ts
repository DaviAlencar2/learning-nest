import { Injectable } from '@nestjs/common';

@Injectable()
export class ManualService {
  getHello(): string {
    return 'Modulo criado manualmente!';
  }
}
