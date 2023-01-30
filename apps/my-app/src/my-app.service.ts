import { ErrorHandlerService, IMessage, MessageDTO } from '@lib-shared/shared';
import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';

const FAKE_DATA: IMessage[] = [
  { id: '1', message: 'Message 1' },
  { id: '2', message: 'Message 2' },
  { id: '3', message: 'Message 3' },
];

@Injectable()
export class MyAppService {
  constructor(private readonly errorHandlerService: ErrorHandlerService) {}

  createNewMessage(data: MessageDTO) {
    FAKE_DATA.push(data);
  }

  getMessageById(messageId: string) {
    const message = FAKE_DATA.find((msg) => msg.id === messageId);
    if (message) return of(message);
    this.errorHandlerService.errorHandlerMicroservice({
      message: 'Not Found results',
      status: 'error',
      code: 404,
    });
  }
}
