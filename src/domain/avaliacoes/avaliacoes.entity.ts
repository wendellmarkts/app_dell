import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';
// Certifique-se de importar a entidade Produto correta
import { Produto } from '../produto/produto.entity';

@Entity('AVALIACOES')
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id_avaliacao: number;

  @ManyToOne(() => Cliente, { nullable: false })
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;

  // Certifique-se de importar a entidade Produto correta
  @ManyToOne(() => Produto, { nullable: false })
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @Column({ nullable: false })
  avaliacao: number;

  @Column('text')
  comentario: string;
}
