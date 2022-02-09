import { Test, TestingModule } from '@nestjs/testing';
import { BitController } from './bit.controller';

describe('BitController', () => {
  let controller: BitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BitController],
    }).compile();

    controller = module.get<BitController>(BitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
