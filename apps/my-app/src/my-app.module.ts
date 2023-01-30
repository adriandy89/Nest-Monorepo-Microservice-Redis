import { Module } from '@nestjs/common';
import { MyAppController } from './my-app.controller';
import { MyAppService } from './my-app.service';
import { SharedModule } from '@lib-shared/shared';

@Module({
  imports: [SharedModule],
  controllers: [MyAppController],
  providers: [MyAppService],
})
export class MyAppModule {}
