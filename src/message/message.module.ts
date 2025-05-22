import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageServie } from './message.service';

@Module({
  imports: [],
  controllers: [MessageController],
  providers: [MessageServie],
})
export class MessageModule {}
