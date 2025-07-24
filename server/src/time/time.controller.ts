import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TimeController {
  @MessagePattern('get_time')
  getTime() {
return new Date().toLocaleString('es-ES');  }
}