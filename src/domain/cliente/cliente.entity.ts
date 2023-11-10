// cliente.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from '../pedido/pedido.entity';
import { Avaliacao } from '../avaliacoes/avaliacoes.entity';
 // Certifique-se de que a entidade Avaliacao esteja importada corretamente.

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

  // OneToMany relationship with Pedido
  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];

  // OneToMany relationship with Avaliacao
  @OneToMany(() => Avaliacao, avaliacao => avaliacao.cliente)
  avaliacoes: Avaliacao[]; // Esta linha é adicionada para representar a relação com avaliações.
}
