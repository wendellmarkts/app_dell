import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'; // Use @nestjs/typeorm
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) // Use @InjectRepository para o TypeORM
    private readonly userRepository: Repository<User>, // Use userRepository em vez de userModel
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.findOneByEmail(email);
  
    if (user && await bcrypt.compare(password, user.senha_hash)) {
      return user;
    }
  
    return null;
  }
  
  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }
  
  // Outros métodos do serviço, se houver
}
