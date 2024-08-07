import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Database type
      host: 'localhost', // Database host
      port: 5432, // Database port
      username: 'your-username', // Database username
      password: 'your-password', // Database password
      database: 'your-database', // Database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entities to be loaded
      synchronize: true, // Automatically sync entities to the database (use in development)
    }),
    // UserModule, // Import your feature module(s)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
