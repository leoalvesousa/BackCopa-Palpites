import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { Game } from 'src/game/entities/game.entity';
import { GameService } from 'src/game/game.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHunchDto } from './dto/create-hunch.dto';
import { UpdateHunchDto } from './dto/update-hunch.dto';

@Injectable()
export class HunchService {

  constructor( private prisma: PrismaService, private gameService: GameService, private userService: AuthService) {}

 async create(data: CreateHunchDto) {

  await this.gameService.findOne(data.gameId);
  data.gameId = Number(data.gameId);

  await this.userService.findOne(data.userId);
  data.userId = Number(data.userId);


   return this.prisma.hunch.create({
    data,
    include:{
    user: true,
    game: true,
    }
   }) ;
  }

  findAll() {
    return this.prisma.hunch.findMany();
  }

  async findOne(id: number) {
    if (isNaN(Number(id))) {
      throw new BadRequestException('ID não é um número');
    }
      const hunch = await this.prisma.hunch.findUnique({
        where: {
          id: +id,
        },
      });
      if (!hunch) {
        throw new BadRequestException('Palpite não encontrado');
      }
      return hunch;
  }

  async update(id: number, data: UpdateHunchDto) {
    await this.findOne(id)

    if(data.gameId)
    await this.gameService.findOne(data.gameId)

    data.gameId = Number(data.gameId)

    return this.prisma.hunch.update({
      data,
      where:{
        id,
      }
    })

    
  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prisma.hunch.delete({
      where:{
        id,
      }
    });
  }
}
