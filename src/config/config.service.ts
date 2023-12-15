import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig, DatabaseConfig } from './config.interface';

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return this.configService.get<number>('port');
  }

  get serviceName(): string {
    return this.configService.get<string>('service_name');
  }

  get databaseConfig(): DatabaseConfig {
    return this.configService.get<DatabaseConfig>('database');
  }
}
