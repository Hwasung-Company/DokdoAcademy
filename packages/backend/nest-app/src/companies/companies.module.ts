import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusCompany } from 'src/companies/entities/bus-company.entity';
import { BusService } from 'src/companies/services/bus.service';
import { BusCompanyResolver } from 'src/companies/resolvers/bus-company.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([BusCompany])],
  providers: [BusService, BusCompanyResolver],
})
export class CompaniesModule {}
