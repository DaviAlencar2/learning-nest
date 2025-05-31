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
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.messageService.findOne(id);
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    await this.messageService.createMessage(body);
  }

  @Delete(':id')
  async deleteMessage(@Param('id', ParseIntPipe) id: number) {
    await this.messageService.deleteMessage(id);
  }

  @Patch(':id')
  async updateMessage(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateMessageDto,
  ) {
    await this.messageService.updateMessage(id, body);
  }
}
