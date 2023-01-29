import {
  HttpException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, catchError, of, timeout } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('MY_APP_SERVICE') private clientMyApp: ClientProxy) {}

  getHello(): string {
    return 'Hello World! - my project';
  }

  createUser() {
    this.clientMyApp.emit('new_email', { email: 'testemail@klm.com' });
  }

  getMessageById(id: string): Observable<any> {
    const pattern = { cmd: 'getMessageById' };
    return this.clientMyApp.send(pattern, id).pipe(
      timeout(3000),
      catchError((err) => {
        console.log(err);
        return of(this.errorHandler(err));
      }),
    );
  }

  errorHandler(error: any) {
    console.log(error);
    if (error.code && error.message)
      throw new HttpException(error.message, error.code);
    throw new InternalServerErrorException('Internal Server Error');
  }
}
