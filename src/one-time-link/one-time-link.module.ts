import { Module } from '@nestjs/common';
import { OneTimeLinkController } from './one-time-link.controller';
import { OneTimeLinkService } from './one-time-link.service';

@Module({
  imports: [],
  controllers: [OneTimeLinkController],
  providers: [OneTimeLinkService],
})
export class OneTimeLinkModule {}
