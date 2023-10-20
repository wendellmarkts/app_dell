import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Certifique-se de importar o TypeOrmModule
import { User } from './user.entity'; // Certifique-se de importar sua entidade de usuário
 
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Importe a entidade User usando o TypeOrmModule
    // Outros módulos importados, se houver
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Exporte o serviço, se necessário
})
export class UsersModule {}
