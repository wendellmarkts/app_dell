// Ensure the path matches the location of your entity files
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';

@Entity('PONTUACAO')
export class Pontuacao {
  @PrimaryGeneratedColumn()
  id_pontuacao: number;

  @ManyToOne(() => Cliente, { nullable: false })
  @JoinColumn({ name: 'cliente_id' }) // This links the foreign key to the 'cliente' field in this entity
  cliente: Cliente;

  @Column({ nullable: false })
  pontos: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_compra: Date;

  // If you want to access the cliente_id foreign key directly, you can also add:
  @Column()
  cliente_id: number; // This will represent the foreign key column in the table
}
