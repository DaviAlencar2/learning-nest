import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { MessageService } from './message.service';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  findAll(): Message[] {
    return this.messageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.messageService.findOne(id);
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto): void {
    this.messageService.createMessage(body);
  }

  @Delete(':id')
  deleteMessage(@Param('id', ParseIntPipe) id: number) {
    this.messageService.deleteMessage(id);
  }

  @Patch(':id')
  updateMessage(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateMessageDto,
  ) {
    this.messageService.updateMessage(id, body);
  }
}
