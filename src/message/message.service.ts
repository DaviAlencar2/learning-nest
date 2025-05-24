import { Injectable } from '@nestjs/common';
import { CreateMessageDto, Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  private lastId = 1;
  private messages: Message[] = [];

  findOne(id: string): Message {
    return this.messages[+id];
  }

  findAll(): Message[] {
    return this.messages;
  }

  createMessage(body: CreateMessageDto): void {
    const message: Message = {
      id: this.lastId++,
      createdAt: new Date(),
      from: body.from,
      to: body.to,
      read: false,
      content: body.content,
    };
    this.messages.push(message);
  }
}
