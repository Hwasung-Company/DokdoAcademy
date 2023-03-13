import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from 'src/users/users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
