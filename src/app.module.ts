import { Module } from '@nestjs/common';
import { OneTimeLinkModule } from './one-time-link';

@Module({
  imports: [OneTimeLinkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
