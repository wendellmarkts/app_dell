 
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';
 

@Entity('ADMIN')
export class Admin {
  @PrimaryGeneratedColumn()
  id_admin: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ unique: true, nullable: false })
  cpf: string;

  @OneToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'id_usuario' })
  user: User;
}
