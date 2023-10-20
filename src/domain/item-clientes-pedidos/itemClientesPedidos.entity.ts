// src/itemClientesPedidos/itemClientesPedidos.entity.ts

import { Entity, ManyToOne, Column, PrimaryColumn } from 'typeorm';
 
import { Pedido } from '../pedido/pedido.entity';
import { Cliente } from '../cliente/cliente.entity';

@Entity('ITEM_CLIENTES_PEDIDOS')
export class ItemClientesPedidos {
  @PrimaryColumn({ type: 'int' })
  id_produto: number;

  @PrimaryColumn({ type: 'int' })
  id_pedido: number;

  @Column({ length: 50 })
  status_pedido: string;

  @ManyToOne(() => Cliente, cliente => cliente.itemClientesPedidos)
  cliente: Cliente;

  @ManyToOne(() => Pedido, pedido => pedido.itemClientesPedidos)
  pedido: Pedido;
}
