import { Controller, Get } from '@nestjs/common';
import { AutomaticoService } from './automatico.service';

@Controller('automatico')
export class AutomaticoController {
  constructor(private readonly automaticoService: AutomaticoService) {}

  @Get('ola')
  getOla(): string {
    return this.automaticoService.getOla();
  }
}
