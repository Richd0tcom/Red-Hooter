import { Test, TestingModule } from '@nestjs/testing';
import { HootsService } from './hoots.service';

describe('HootsService', () => {
  let service: HootsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HootsService],
    }).compile();

    service = module.get<HootsService>(HootsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
