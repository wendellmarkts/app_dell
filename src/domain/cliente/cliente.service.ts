import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClienteService {
    
    constructor(
        @InjectRepository(Cliente)
        private clientesRepository: Repository<Cliente>,
      ) {}
  async create(data: Partial<Cliente>): Promise<Cliente> {
    const cliente = this.clientesRepository.create(data);
    return this.clientesRepository.save(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return this.clientesRepository.find();
  }
}
