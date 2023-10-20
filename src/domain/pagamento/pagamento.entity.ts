import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from '../pedido/pedido.entity';

@Entity('PAGAMENTO')
export class Pagamento {
  @PrimaryGeneratedColumn()
  id_pagamento: number;

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  data_pagamento: Date;

  @Column({ length: 50 })
  tipo: string;

  @Column({ length: 50 })
  status: string;

  @ManyToOne(() => Pedido, pedido => pedido.pagamentos)
  @JoinColumn({ name: 'id_pedido' }) // Especifique o nome da coluna para o join
  pedido: Pedido;

  @Column({ name: 'id_pedido' }) // Adicione esta linha para especificar o nome da coluna
  id_pedido: number; // Adicione esta linha para mapear o ID do pedido
}
