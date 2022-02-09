import { Test, TestingModule } from '@nestjs/testing';
import { BitService } from './bit.service';

describe('BlogService', () => {
  let service: BitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BitService],
    }).compile();

    service = module.get<BitService>(BitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
