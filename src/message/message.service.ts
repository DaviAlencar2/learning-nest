import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageServie {
  getMessage(): string {
    return 'mensagem';
  }
}
