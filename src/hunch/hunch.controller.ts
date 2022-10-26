import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HunchService } from './hunch.service';
import { CreateHunchDto } from './dto/create-hunch.dto';
import { UpdateHunchDto } from './dto/update-hunch.dto';

@Controller('hunch')
export class HunchController {
  constructor(private readonly hunchService: HunchService) {}

  @Post()
  create(@Body() createHunchDto: CreateHunchDto) {
    return this.hunchService.create(createHunchDto);
  }

  @Get()
  findAll() {
    return this.hunchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hunchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHunchDto: UpdateHunchDto) {
    return this.hunchService.update(+id, updateHunchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hunchService.remove(+id);
  }
}
