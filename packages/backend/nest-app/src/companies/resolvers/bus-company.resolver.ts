import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BusCompany } from 'src/companies/entities/bus-company.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BusService } from 'src/companies/services/bus.service';
import {
  CreateBusCompanyInput,
  CreateBusCompanyOutput,
} from 'src/companies/dto/bus/create/create-bus-company.dto';

@Resolver(() => BusCompany)
@UseGuards(JwtAuthGuard)
export class BusCompanyResolver {
  constructor(private readonly busService: BusService) {}

  @Query(() => [BusCompany], { name: 'busCompanies' })
  async getBusCompanies() {
    return await this.busService.getBusCompanies();
  }

  @Query(() => BusCompany, { name: 'busCompany' })
  async getBusCompany(@Args('_id') _id: string) {
    return await this.busService.getBusCompany(_id);
  }

  @Mutation((returns) => CreateBusCompanyOutput)
  async createBusCompany(@Args('input') input: CreateBusCompanyInput) {
    return this.busService.createBusCompany(input);
  }
}
