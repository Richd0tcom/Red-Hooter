import { Module } from '@nestjs/common';
import { HootsService } from './hoots.service';
import { HootsController } from './hoots.controller';

@Module({
  controllers: [HootsController],
  providers: [HootsService]
})
export class HootsModule {}
