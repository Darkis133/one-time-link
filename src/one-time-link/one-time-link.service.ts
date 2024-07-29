import { BadRequestException, GoneException, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { OneTimeLinkDto } from './dto';

@Injectable()
export class OneTimeLinkService {
  private oneTimeLinks = {};

  setLink(data: OneTimeLinkDto) {
    const linkId = uuidv4();

    this.oneTimeLinks[linkId] = {
      value: data.value,
      consumed: false,
    };
    // @ts-ignore
    return {
      link: `http://${process.env.APP_HOST}:${process.env.APP_PORT}/consume/${linkId}`,
    };
  }

  getLinkData(linkId: string) {
    const linkData = this.oneTimeLinks[linkId];

    if (!linkData) {
      throw new BadRequestException('Provided link id was not found');
    }

    if (linkData.consumed) {
      throw new GoneException('Provided link id wan already consumed');
    }

    linkData.consumed = true;

    return { value: linkData.value };
  }
}
