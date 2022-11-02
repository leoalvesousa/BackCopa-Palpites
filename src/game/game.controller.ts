import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { GameService } from './game.service';
import { jwtGuard } from 'src/auth/dto/jwt.guard';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @UseGuards(jwtGuard)
  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @UseGuards(jwtGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gameService.findOne(+id);
  }
}
