import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';
import { ClientesController } from './cliente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])], // Note: We're importing the entity, not the repository directly
  providers: [ClienteService],
  controllers: [ClientesController], // Ensure you also have your controller here if it's part of this module
})
export class ClienteModule {}
