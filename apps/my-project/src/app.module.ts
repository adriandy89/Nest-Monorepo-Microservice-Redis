import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SharedModule } from '@lib-shared/shared';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MY_APP_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
          password: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
        },
      },
    ]),
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
