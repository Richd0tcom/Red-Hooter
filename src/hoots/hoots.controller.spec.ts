import { Test, TestingModule } from '@nestjs/testing';
import { HootsController } from './hoots.controller';
import { HootsService } from './hoots.service';

describe('HootsController', () => {
  let controller: HootsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HootsController],
      providers: [HootsService],
    }).compile();

    controller = module.get<HootsController>(HootsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
