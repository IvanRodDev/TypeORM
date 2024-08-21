import { Module } from '@nestjs/common';
import { KingController } from './controllers/king.controller';

@Module({
  controllers: [KingController]
})
export class KingModule {}
