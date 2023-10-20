import { Module } from '@nestjs/common';
import { ItemClientesPedidosService } from './item-clientes-pedidos.service';
import { ItemClientesPedidosController } from './item-clientes-pedidos.controller';

@Module({
  providers: [ItemClientesPedidosService],
  controllers: [ItemClientesPedidosController]
})
export class ItemClientesPedidosModule {}
