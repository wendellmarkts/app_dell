// src/itemProdutosPedidos/itemProdutosPedidos.entity.ts

import { Entity, ManyToOne, Column, PrimaryColumn } from 'typeorm';
 
import { Pedido } from '../pedido/pedido.entity';
import { Produto } from '../produto/produto.entity';

@Entity('ITEM_PRODUTOS_PEDIDOS')
export class ItemProdutosPedidos {

  @PrimaryColumn()
  id_produto: number;

  @PrimaryColumn()
  id_pedido: number;

  @ManyToOne(() => Produto, produto => produto.id_produto)
  produto: Produto;

  @ManyToOne(() => Pedido, pedido => pedido.id_pedido)
  pedido: Pedido;

  @Column({ length: 255 })
  qrcode: string;

  @Column('int')
  quantidade: number;

  @Column('decimal', { precision: 10, scale: 2 })
  preco_unitario: number;

  @Column({ length: 50 })
  status_pagamento: string;

  @Column({ length: 50 })
  item_status_pedido_produto: string;
}
