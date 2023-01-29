import { NestFactory } from '@nestjs/core';
import { MyAppModule } from './my-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(MyAppModule);
  // await app.listen(3001, () => console.log('App running on port: ', 3001));

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MyAppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
        password: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
      },
    },
  );
  await app.listen();
}
bootstrap();
