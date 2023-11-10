import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Módulos
import { ClienteModule } from './domain/cliente/cliente.module';
import { PagamentoModule } from './domain/pagamento/pagamento.module';
import { PedidoModule } from './domain/pedido/pedido.module';
import { ProdutoModule } from './domain/produto/produto.module';
import { ItemProdutosPedidosModule } from './domain/item-produtos-pedidos/item-produtos-pedidos.module';
 

// Entidades
import { Produto } from './domain/produto/produto.entity';
import { Cliente } from './domain/cliente/cliente.entity';
import { Pedido } from './domain/pedido/pedido.entity';
import { Pagamento } from './domain/pagamento/pagamento.entity';
import { Avaliacao } from './domain/avaliacoes/avaliacoes.entity';
import { Cozinha } from './domain/cozinha/cozinha.entity';
import { Pontuacao } from './domain/pontuacao/pontuacao.entity';
import { Role } from './domain/roles/role.entity';
 
import { Desconto } from './domain/descontos/descontos.entity';
import { ItemProdutosPedidos } from './domain/item-produtos-pedidos/itemProdutosPedidos.entity';
 
import { Categoria } from './domain/categoria/categoria.entity';
import { CategoriaModule } from './domain/categoria/categoria.module';
 
import { UsersModule } from './domain/users/users.module';
import { RolesModule } from './domain/roles/roles.module';
import { User } from './domain/users/user.entity';
import { EstoqueModule } from './domain/estoque/estoque.module';
import { Estoque } from './domain/estoque/estoque.entity';
 
import { NotaFiscalModule } from './domain/nota-fiscal/nota-fiscal.module';
import { NotaFiscal } from './domain/nota-fiscal/nota-fiscal.entity';
import { HistoricoPedido } from './domain/historico_pedido/historico_pedido.entity';
import { HistoricoPedidoModule } from './domain/historico_pedido/historico_pedido.module';
 
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
        Produto, Cliente, Pedido,  Avaliacao, Cozinha,Categoria,
        Pontuacao,Estoque, Role, Pagamento, Desconto, ItemProdutosPedidos, User,
        NotaFiscal,HistoricoPedido
        
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
    HistoricoPedidoModule,
    ItemProdutosPedidosModule,
    EstoqueModule,
    NotaFiscalModule,
 
  ],
  providers: [],
})
export class AppModule {}
