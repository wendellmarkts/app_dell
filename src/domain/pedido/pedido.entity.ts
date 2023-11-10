// src/pedido/pedido.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';
import { Pagamento } from '../pagamento/pagamento.entity';
import { ItemProdutosPedidos } from '../item-produtos-pedidos/itemProdutosPedidos.entity';
import { NotaFiscal } from '../nota-fiscal/nota-fiscal.entity';
import { HistoricoPedido } from '../historico_pedido/historico_pedido.entity';

@Entity('PEDIDO')
export class Pedido {
  @PrimaryGeneratedColumn()
  id_pedido: number;

  @CreateDateColumn({ type: 'timestamp' })
  data_pedido: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column('varchar', { length: 50 }) // Assumindo que você terá um tamanho máximo de 50 caracteres para o método de pagamento
  metodo_pagamento: string;

  @Column('varchar', { length: 50 }) // Assumindo que você terá um tamanho máximo de 50 caracteres para o status do pedido
  status_pedido: string;

  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  @JoinColumn({ name: 'cliente_id' }) // Isso mapeia a coluna de chave estrangeira
  cliente: Cliente;

  @OneToMany(() => ItemProdutosPedidos, itemProdutosPedidos => itemProdutosPedidos.pedido)
  itensProdutosPedidos: ItemProdutosPedidos[];

  @OneToMany(() => Pagamento, pagamento => pagamento.pedido)
  pagamentos: Pagamento[];

  @OneToMany(() => NotaFiscal, notaFiscal => notaFiscal.pedido)
  notasFiscais: NotaFiscal[];

  @OneToMany(() => HistoricoPedido, historicoPedido => historicoPedido.pedido)
  historicoPedidos: HistoricoPedido[];
  // Se você quiser ter acesso ao cliente_id diretamente, você pode adicioná-lo assim:
  @Column({ nullable: false })
  cliente_id: number; // Esta coluna não é nula, já que é uma chave estrangeira
}
