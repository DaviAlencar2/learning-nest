import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomaticoModule } from 'src/automatico/automatico.module';
import { ManualModule } from 'src/manual/manual.module';
import { MessageModule } from 'src/message/message.module';

@Module({
  imports: [AutomaticoModule, ManualModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
