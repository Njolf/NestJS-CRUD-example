import { Test } from '@nestjs/testing';
import { EmployeesController } from './employees.controller';

describe('Employees Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [EmployeesController],
    }).compile();

    controller = module.get(EmployeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
