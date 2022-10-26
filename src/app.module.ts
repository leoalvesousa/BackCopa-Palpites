import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { HunchModule } from './hunch/hunch.module';

@Module({
  imports: [GameModule, AuthModule, HunchModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
