import {
  ErrorHandlerService,
  EventPatternTypes,
  MessageDTO,
  MessagePatternTypes,
} from '@lib-shared/shared';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, catchError, of, timeout } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('MY_APP_SERVICE') private clientMyApp: ClientProxy,
    private readonly errorHandlerService: ErrorHandlerService,
  ) {}

  createUser(message: MessageDTO) {
    this.clientMyApp.emit(EventPatternTypes.newEmail, message);
  }

  getMessageById(id: string): Observable<any> {
    return this.clientMyApp.send(MessagePatternTypes.getMessageById, id).pipe(
      timeout(5000),
      catchError((err) => {
        return of(this.errorHandlerService.errorHandlerAPI(err));
      }),
    );
  }
}
