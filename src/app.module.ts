import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Módulos
import { ClienteModule } from './domain/cliente/cliente.module';
import { PagamentoModule } from './domain/pagamento/pagamento.module';
import { PedidoModule } from './domain/pedido/pedido.module';
import { ProdutoModule } from './domain/produto/produto.module';
import { ItemProdutosPedidosModule } from './domain/item-produtos-pedidos/item-produtos-pedidos.module';
import { ItemClientesPedidosModule } from './domain/item-clientes-pedidos/item-clientes-pedidos.module';

// Entidades
import { Produto } from './domain/produto/produto.entity';
import { Cliente } from './domain/cliente/cliente.entity';
import { Pedido } from './domain/pedido/pedido.entity';
import { Pagamento } from './domain/pagamento/pagamento.entity';
import { Avaliacao } from './domain/avaliacoes/avaliacoes.entity';
import { Cozinha } from './domain/cozinha/cozinha.entity';
import { Pontuacao } from './domain/pontuacao/pontuacao.entity';
import { Role } from './domain/roles/role.entity';
import { Admin } from './domain/admin/admin.entity';
import { Desconto } from './domain/descontos/descontos.entity';
import { ItemProdutosPedidos } from './domain/item-produtos-pedidos/itemProdutosPedidos.entity';
import { ItemClientesPedidos } from './domain/item-clientes-pedidos/itemClientesPedidos.entity';
import { Categoria } from './domain/categoria/categoria.entity';
import { CategoriaModule } from './domain/categoria/categoria.module';
import { RouterModule } from '@nestjs/core';
import { UsersModule } from './domain/users/users.module';
import { RolesModule } from './domain/roles/roles.module';
import { User } from './domain/users/user.entity';
 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_pedido',
      entities: [
        Produto, Cliente, Pedido, Admin, Avaliacao, Cozinha,Categoria,
        Pontuacao, Role, Pagamento, Desconto, ItemProdutosPedidos, User,
        ItemClientesPedidos
      ],
      synchronize: true,
    }),
    CategoriaModule,
    ProdutoModule,
    UsersModule,
    RolesModule,
    ClienteModule,
    PedidoModule,
    PagamentoModule,
    ItemProdutosPedidosModule,
    ItemClientesPedidosModule
  ],
})
export class AppModule {}
