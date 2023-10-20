// produto.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Categoria } from '../categoria/categoria.entity';
import { ItemProdutosPedidos } from '../item-produtos-pedidos/itemProdutosPedidos.entity';
 


@Entity('PRODUTOS')
export class Produto {
  @PrimaryGeneratedColumn()
  id_produto: number;

  @Column({ length: 255 })
  descricao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @Column('int')
  estoque: number;

  @Column('text')
  imagem_url: string;
  
  @OneToMany(() => ItemProdutosPedidos, itemPedido => itemPedido.produto)
  itemPedidos: ItemProdutosPedidos[];

  @ManyToOne(() => Categoria, categoria => categoria.produtos)
  categoria: Categoria;
}
