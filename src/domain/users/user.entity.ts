import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../roles/role.entity';

@Entity('USUARIOS')
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number; // This should match the name of the primary key column

  @Column({ unique: true })
  email: string; // This will map to the email column and is marked as unique

  @Column({ name: 'senha_hash' })
  senha_hash: string; // The property name should match the column name

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' }) // This specifies the column name for the foreign key
  role: Role; // This establishes the many-to-one relationship with the Role entity
}
