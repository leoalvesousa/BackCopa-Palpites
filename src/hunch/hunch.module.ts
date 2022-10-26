import { Module } from '@nestjs/common';
import { HunchService } from './hunch.service';
import { HunchController } from './hunch.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { GameService } from 'src/game/game.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: `${process.env.JWT_EXPIRES_IN}s`,
      },
    }),
  ],
  controllers: [HunchController],
  providers: [HunchService, PrismaService, AuthService, GameService]
})
export class HunchModule {}
