import { Controller, Get } from '@nestjs/common';
import { ManualService } from './manual.service';

@Controller('manual')
export class ManualController {
  constructor(private readonly manualService: ManualService) {}

  @Get('hello')
  getHello(): string {
    return this.manualService.getHello();
  }
}
