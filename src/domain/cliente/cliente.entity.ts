// cliente.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from '../pedido/pedido.entity';
import { ItemClientesPedidos } from '../item-clientes-pedidos/itemClientesPedidos.entity';
 

@Entity('CLIENTE')
export class Cliente {
  @PrimaryGeneratedColumn()
  id_cliente: number;

  @Column({ length: 255 })
  nome: string;

  @Column('text')
  endereco: string;

  @Column('date', { nullable: true })
  data_nascimento: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  data_criacao: Date;

  @Column({ length: 14, unique: true })
  cpf: string;

  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];

  @OneToMany(() => ItemClientesPedidos, item => item.cliente)
  itemClientesPedidos: ItemClientesPedidos[]; // Adicione esta linha
}
