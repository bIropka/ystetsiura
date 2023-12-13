import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'hello, Iegor';
  }

  @Post()
  createMessage(@Body() body: any) {
    return `hey man, you've wrote: '${body.variables.content}'`;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return `hey man, you've sent: '${id}'`;
  }
}
