import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageServie } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageServie) {}

  @Get()
  findAll(): string {
    return this.messageService.getMessage();
  }

  // @Get('fixa/:dinamico/fixa') // so para mostrar como é possivel diversas combinaçoes
  // @Get(':dinamico/:dinamico/fixa')
  @Get(':id') // parametro de rota
  findByID(@Param('id') parametros: any) {
    return `${parametros}`;
  }

  @Post()
  create(@Body() body: object) {
    console.log(body);
    return body;
  }
}
