import { Controller } from '@nestjs/common';
import { MyAppService } from './my-app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import {
  MessageDTO,
  EventPatternTypes,
  MessagePatternTypes,
} from '@lib-shared/shared';

@Controller()
export class MyAppController {
  constructor(private readonly myAppService: MyAppService) {}

  @EventPattern(EventPatternTypes.newEmail)
  createNewMessage(message: MessageDTO) {
    this.myAppService.createNewMessage(message);
  }

  @MessagePattern(MessagePatternTypes.getMessageById)
  getMessageById(messageId: string) {
    return this.myAppService.getMessageById(messageId);
  }
}
