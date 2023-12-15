import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/config';
import { ConfigurationService } from './config/config.service';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] }), ConfigModule],
  controllers: [AppController],
  providers: [AppService, ConfigurationService],
})
export class AppModule {
}
