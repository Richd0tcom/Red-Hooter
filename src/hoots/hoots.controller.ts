import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HootsService } from './hoots.service';
import { CreateHootDto } from './dto/create-hoot.dto';
import { UpdateHootDto } from './dto/update-hoot.dto';

@Controller('hoots')
export class HootsController {
  constructor(private readonly hootsService: HootsService) {}

  @Post()
  create(@Body() createHootDto: CreateHootDto) {
    return this.hootsService.create(createHootDto);
  }

  @Get()
  findAll() {
    return this.hootsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hootsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHootDto: UpdateHootDto) {
    return this.hootsService.update(+id, updateHootDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hootsService.remove(+id);
  }
}
