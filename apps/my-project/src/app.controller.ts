import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  newUser() {
    return this.appService.createUser();
  }

  @Get(':id')
  getMessageById(@Param('id') id: string) {
    return this.appService.getMessageById(id);
  }
}
