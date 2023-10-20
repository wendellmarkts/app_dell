import { Controller, Get, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/cliente.dto';
 
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClienteService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createClienteDto: CreateClienteDto): Promise<Cliente> {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  findAll(): Promise<Cliente[]> {
    return this.clientesService.findAll();
  }
}
