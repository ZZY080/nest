import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), // 配置 TypeORM
    // UserModule, // Import your feature module(s)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
