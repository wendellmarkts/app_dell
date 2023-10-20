import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente> {
  // ... your methods ...
}
