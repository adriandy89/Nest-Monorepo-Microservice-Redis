import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const appPort = 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(appPort, () =>
    console.log('App running on port: ', appPort),
  );
}
bootstrap();
