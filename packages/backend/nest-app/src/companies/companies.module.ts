import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusCompany } from 'src/companies/entities/companies/bus-company.entity';
import { BusService } from 'src/companies/services/companies/bus.service';
import { BusCompanyResolver } from 'src/companies/resolvers/bus-company.resolver';
import { BusObjectService } from 'src/companies/services/objects/bus.service';
import { Bus } from 'src/companies/entities/objects/bus.entity';
import { BusResolver } from 'src/companies/resolvers/objects/bus.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([BusCompany, Bus])],
  providers: [BusService, BusCompanyResolver, BusObjectService, BusResolver],
})
export class CompaniesModule {}
