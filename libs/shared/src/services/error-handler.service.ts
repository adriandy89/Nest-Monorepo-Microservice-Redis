import {
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { IRpcException } from '../interfaces';

@Injectable()
export class ErrorHandlerService {
  errorHandlerMicroservice(error: IRpcException) {
    throw new RpcException(error);
  }

  errorHandlerAPI(error: any) {
    console.log(error);
    if (error.code && error.message)
      throw new HttpException(error.message, error.code);
    throw new InternalServerErrorException('Internal Server Error');
  }
}
