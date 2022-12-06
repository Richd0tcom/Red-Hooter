import { Injectable } from '@nestjs/common';
import { CreateHootDto } from './dto/create-hoot.dto';
import { UpdateHootDto } from './dto/update-hoot.dto';

@Injectable()
export class HootsService {
  create(createHootDto: CreateHootDto) {
    return 'This action adds a new hoot';
  }

  findAll() {
    return `This action returns all hoots`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hoot`;
  }

  update(id: number, updateHootDto: UpdateHootDto) {
    return `This action updates a #${id} hoot`;
  }

  remove(id: number) {
    return `This action removes a #${id} hoot`;
  }
}
