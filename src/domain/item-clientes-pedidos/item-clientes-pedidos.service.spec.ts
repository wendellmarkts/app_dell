import { Test, TestingModule } from '@nestjs/testing';
import { ItemClientesPedidosService } from './item-clientes-pedidos.service';

describe('ItemClientesPedidosService', () => {
  let service: ItemClientesPedidosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemClientesPedidosService],
    }).compile();

    service = module.get<ItemClientesPedidosService>(ItemClientesPedidosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
