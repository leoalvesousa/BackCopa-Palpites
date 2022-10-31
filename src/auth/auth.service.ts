import {BadRequestException,Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateLogDto } from './dto/create-log.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async create(data: CreateAuthDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (user) {
      throw new BadRequestException('Email já cadastrado');
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(data.password, salt);

    data.password = hashPassword;

    return this.prisma.user.create({
      data,
    });
  }

  async login(createLogDto: CreateLogDto) {

    const user = await this.prisma.user.findFirst({
      where: {
        email: createLogDto.email,
      },
    });

    if (!user) {
      throw new BadRequestException('Email ou senha invalido');
    }
    
    if (!(await bcrypt.compare(createLogDto.password, user.password))) {
      throw new BadRequestException('Email ou senha invalido');
    }

    const token = this.jwtService.sign({
      id: user.id,
      name: user.name,
      email: user.email,
    });
    return {
      access_token: token,
    };
  }
  async findOne(id: number) {
    if (isNaN(Number(id))) {
      throw new BadRequestException('ID não é um número');
    }
      const user = await this.prisma.user.findUnique({
        where: {
          id:+id,
        },
        include:{
          hunches:true
        }
      });
      if (!user) {
        throw new BadRequestException('Usuario não encontrado');
      }
      return user;
  }
}
