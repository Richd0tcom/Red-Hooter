import { PartialType } from '@nestjs/mapped-types';
import { CreateHootDto } from './create-hoot.dto';

export class UpdateHootDto extends PartialType(CreateHootDto) {}
