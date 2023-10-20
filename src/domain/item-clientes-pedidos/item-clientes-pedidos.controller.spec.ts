import { Test, TestingModule } from '@nestjs/testing';
import { ItemClientesPedidosController } from './item-clientes-pedidos.controller';

describe('ItemClientesPedidosController', () => {
  let controller: ItemClientesPedidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemClientesPedidosController],
    }).compile();

    controller = module.get<ItemClientesPedidosController>(ItemClientesPedidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
