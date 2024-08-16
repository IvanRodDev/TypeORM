import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'Ivan',
      password: '123',
      database: 'typeOrmDb',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
