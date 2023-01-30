import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDTO } from '@lib-shared/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  newUser(@Body() message: MessageDTO) {
    return this.appService.createUser(message);
  }

  @Get(':id')
  getMessageById(@Param('id') id: string) {
    return this.appService.getMessageById(id);
  }
}
