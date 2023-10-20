 // Certifique-se de importar a entidade Produto correta
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';
import { Produto } from '../produto/produto.entity';

@Entity('AVALIACOES')
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id_avaliacao: number;

  @ManyToOne(() => Cliente, { nullable: false })
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;

  @ManyToOne(() => Produto, { nullable: false }) // Certifique-se de importar a entidade Produto correta
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @Column({ nullable: false })
  avaliacao: number;

  @Column('text')
  comentario: string;
}
