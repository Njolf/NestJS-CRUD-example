import { Test } from '@nestjs/testing';
import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [EmployeesService],
    }).compile();

    service = module.get(EmployeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
