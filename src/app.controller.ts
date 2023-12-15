import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigurationService } from './config/config.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigurationService
  ) {}

  @Get()
  getHello(): string {
    const dbConfig = this.configService.databaseConfig;
    console.log(dbConfig);
    return this.appService.getHello();
  }
}
