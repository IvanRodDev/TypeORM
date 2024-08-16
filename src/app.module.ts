import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KingModule } from './king/king.module';

@Module({
  controllers: [],
  providers: [],
  imports: [KingModule],
})
export class AppModule {}
