import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  throwNotFound() {
    throw new NotFoundException('Mensagem não encontrada!');
  }

  private lastId = 1;
  private messages: Message[] = [];

  async findOne(id: number) {
    const message = await this.messageRepository.findOne({
      where: {
        id: id,
      },
    });

    if (message) return message;
    this.throwNotFound();
  }

  async findAll() {
    const messagess = await this.messageRepository.find();
    return messagess;
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

  deleteMessage(id: number) {
    const exists = this.messages.some((message) => message.id === id);

    if (exists) {
      this.messages = this.messages.filter((message) => message.id !== id);
    } else {
      this.throwNotFound();
    }
  }

  updateMessage(id: number, body: UpdateMessageDto): void {
    const messageIdx = this.messages.findIndex((message) => message.id === id);

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
