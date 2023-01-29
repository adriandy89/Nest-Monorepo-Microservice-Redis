import { Controller, Get, NotFoundException } from '@nestjs/common';
import { MyAppService } from './my-app.service';
import { EventPattern, MessagePattern, RpcException } from '@nestjs/microservices';
import { of } from 'rxjs';

@Controller()
export class MyAppController {
  constructor(private readonly myAppService: MyAppService) {}

  @Get()
  getHello(): string {
    return this.myAppService.getHello();
  }

  @EventPattern('new_email')
  handleNewEmail(data: any) {
    console.log('This is the data from "new_email": ', data);
  }

  @MessagePattern({ cmd: 'getMessageById' })
  getMessageById(messageId) {
    console.log('This is the id from "getMessageById": ', messageId);
    //return of({ id: messageId });
    throw new RpcException({
      message: 'Not Found results',
      status: 'error',
      code: 404,
    });
  }
}
