import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateMessageDto,
  Message,
  UpdateMessageDto,
} from './entities/message.entity';

@Injectable()
export class MessageService {
  throwNotFound() {
    throw new NotFoundException('Mensagem não encontrada!');
  }

  private lastId = 1;
  private messages: Message[] = [];

  findOne(id: string): Message | undefined {
    const message = this.messages.find((item) => item.id === +id);
    if (message) return message;
    this.throwNotFound();
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

  deleteMessage(id: string) {
    const exists = this.messages.some((message) => message.id === +id);

    if (exists) {
      this.messages = this.messages.filter((message) => message.id !== +id);
    } else {
      this.throwNotFound();
    }
  }

  updateMessage(id: string, body: UpdateMessageDto): void {
    const messageIdx = this.messages.findIndex((message) => message.id === +id);

    if (messageIdx >= 0) {
      this.messages[messageIdx] = {
        ...this.messages[messageIdx],
        ...body,
      };
    } else {
      this.throwNotFound();
    }
  }
}
