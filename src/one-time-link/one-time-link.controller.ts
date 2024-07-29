import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OneTimeLinkService } from './one-time-link.service';
import { OneTimeLinkDto } from './dto';

@Controller()
export class OneTimeLinkController {
  constructor(private readonly oneTimeLinkService: OneTimeLinkService) {}
  @Post('generate')
  async generateLink(@Body() value: OneTimeLinkDto) {
    return this.oneTimeLinkService.setLink(value);
  }

  @Get('consume/:id')
  getLinkData(@Param('id') id: string) {
    return this.oneTimeLinkService.getLinkData(id);
  }
}
