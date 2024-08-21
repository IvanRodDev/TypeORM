import { Module } from '@nestjs/common';
import { KingModule } from './king/king.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.development.env`,
      isGlobal: true, 
    }),
    KingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
