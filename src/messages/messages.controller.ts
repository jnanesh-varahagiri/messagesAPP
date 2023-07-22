import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './Dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'HI';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto): void {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log(id);
  }
}
