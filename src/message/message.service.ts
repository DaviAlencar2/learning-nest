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
    const messages = await this.messageRepository.find();
    return messages;
  }

  async createMessage(body: CreateMessageDto) {
    const newMessage = {
      from: body.from,
      to: body.to,
      content: body.content,
    };
    const message = this.messageRepository.create(newMessage);
    return await this.messageRepository.save(message);
  }

  async deleteMessage(id: number) {
    const message = await this.messageRepository.findOneBy({
      id: id,
    });
    if (!message) return this.throwNotFound();
    return this.messageRepository.remove(message);
  }

  async updateMessage(id: number, body: UpdateMessageDto) {
    const message = await this.messageRepository.preload({
      id,
      ...body,
    });

    if (!message) return this.throwNotFound();
    await this.messageRepository.save(message);
    return message;
  }
}
