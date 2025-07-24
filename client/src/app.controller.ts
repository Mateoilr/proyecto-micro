import { Controller, Get } from '@nestjs/common';
import { TimeService } from './time/time.service';

@Controller()
export class AppController {
  constructor(private readonly timeService: TimeService) {}

  @Get('time')
  async getTime() {
    return this.timeService.getTime();
  }
}