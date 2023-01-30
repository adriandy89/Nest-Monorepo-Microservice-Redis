import { Module } from '@nestjs/common';
import { ErrorHandlerService } from './services';

@Module({
  providers: [ErrorHandlerService],
  exports: [ErrorHandlerService],
})
export class SharedModule {}
