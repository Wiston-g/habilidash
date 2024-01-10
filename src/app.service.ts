import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getVariable(): string {
    const DB_DATABASE = this.configService.get<string>('DB_DATABASE');
    return DB_DATABASE;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
