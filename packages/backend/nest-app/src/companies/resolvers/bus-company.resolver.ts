import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BusCompany } from 'src/companies/entities/companies/bus-company.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BusService } from 'src/companies/services/companies/bus.service';
import {
  CreateBusCompanyInput,
  CreateBusCompanyOutput,
} from 'src/companies/dto/companies/bus/create/create-bus-company.dto';
import {
  DeleteBusCompanyInputs,
  DeleteBusCompanyOutput,
} from 'src/companies/dto/companies/bus/create/delete-bus-company.dto';
import {
  GetBusCompaniesInput,
  GetBusCompaniesOutput,
  SearchBusCompaniesInput,
  SearchBusCompaniesOutput,
} from 'src/companies/dto/companies/bus/get/bus-companies.dto';

@Resolver(() => BusCompany)
@UseGuards(JwtAuthGuard)
export class BusCompanyResolver {
  constructor(private readonly busService: BusService) {}

  @Query(() => GetBusCompaniesOutput, { name: 'busCompanies' })
  async getBusCompanies(@Args('input') input: GetBusCompaniesInput) {
    return await this.busService.getBusCompanies(input);
  }

  @Query(() => BusCompany, { name: 'busCompany' })
  async getBusCompany(@Args('name') name: string) {
    return await this.busService.getBusCompany(name);
  }

  @Query((returns) => SearchBusCompaniesOutput, { name: 'searchBusCompanies' })
  async searchBusCompanies(@Args('input') input: SearchBusCompaniesInput) {
    return this.busService.searchBusCompanies(input);
  }

  @Mutation((returns) => CreateBusCompanyOutput)
  async createBusCompany(@Args('input') input: CreateBusCompanyInput) {
    return this.busService.createBusCompany(input);
  }

  @Mutation((returns) => CreateBusCompanyOutput)
  async deleteBusCompanies(@Args('input') input: DeleteBusCompanyInputs) {
    return this.busService.deleteBusCompany(input);
  }
}
