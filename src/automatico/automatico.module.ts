import { Module } from '@nestjs/common';
import { AutomaticoController } from './automatico.controller';
import { AutomaticoService } from './automatico.service';

@Module({
  controllers: [AutomaticoController],
  providers: [AutomaticoService],
})
export class AutomaticoModule {}
