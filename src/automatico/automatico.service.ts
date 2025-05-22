import { Injectable } from '@nestjs/common';

@Injectable()
export class AutomaticoService {
  getOla(): string {
    return 'ola';
  }
}
