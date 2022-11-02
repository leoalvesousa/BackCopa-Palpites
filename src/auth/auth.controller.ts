import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateLogDto } from './dto/create-log.dto';
import { jwtGuard } from './dto/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateAuthDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(jwtGuard)
  @Post('login')
  login(@Body() createLogDto: CreateLogDto) {
    return this.usersService.login(createLogDto);
  }
  @UseGuards(jwtGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.usersService.findOne(+id);
  }
}
