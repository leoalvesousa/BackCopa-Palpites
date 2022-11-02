import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { HunchService } from './hunch.service';
import { CreateHunchDto } from './dto/create-hunch.dto';
import { UpdateHunchDto } from './dto/update-hunch.dto';
import { jwtGuard } from 'src/auth/dto/jwt.guard';

@Controller('hunch')
export class HunchController {
  constructor(private readonly hunchService: HunchService) {}

  @UseGuards(jwtGuard)
  @Post()
  create(@Body() createHunchDto: CreateHunchDto) {
    return this.hunchService.create(createHunchDto);
  }

  @UseGuards(jwtGuard)
  @Get()
  findAll() {
    return this.hunchService.findAll();
  }

  @UseGuards(jwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hunchService.findOne(+id);
  }

  @UseGuards(jwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHunchDto: UpdateHunchDto) {
    return this.hunchService.update(+id, updateHunchDto);
  }

  @UseGuards(jwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hunchService.remove(+id);
  }
}
