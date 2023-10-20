// categoria.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from '../produto/produto.entity';
 

@Entity('CATEGORIA')
export class Categoria {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @Column({ length: 255 })
  nome_categoria: string;

  @Column('text')
  descricao: string;

  @OneToMany(() => Produto, produto => produto.categoria)
  produtos: Produto[];
}
