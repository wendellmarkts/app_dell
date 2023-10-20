// pedido.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';
import { ItemClientesPedidos } from '../item-clientes-pedidos/itemClientesPedidos.entity';
import { Pagamento } from '../pagamento/pagamento.entity';
 

@Entity('PEDIDO')
export class Pedido {
  @PrimaryGeneratedColumn()
  id_pedido: number;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  data_pedido: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  cliente: Cliente;

  @OneToMany(() => ItemClientesPedidos, item => item.pedido)
  itemClientesPedidos: ItemClientesPedidos[]; // Adicione esta linha
  
  @OneToMany(() => Pagamento, pagamento => pagamento.pedido) // Define the relationship
  pagamentos: Pagamento[]; // Define the property
}
