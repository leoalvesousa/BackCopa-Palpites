import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Header } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateLogDto } from './dto/create-log.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateAuthDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  login(@Body() createLogDto: CreateLogDto) {
    return this.usersService.login(createLogDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }
}

