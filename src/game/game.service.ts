import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService){}

  findAll() {
    return this.prisma.game.findMany();
  }

   async findOne(id: number) {
    if (isNaN(Number(id))) {
      throw new BadRequestException('ID não é um numero');
      
    }
      const game = await this.prisma.game.findUnique({
        where: {
          id:+id,
        },
      });
      if (!game) {
        throw new BadRequestException('Partida não encontrada');
      }
      return game;
  }

}
