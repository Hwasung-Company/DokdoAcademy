import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Bus } from 'src/companies/entities/objects/bus.entity';
import { BusObjectService } from 'src/companies/services/objects/bus.service';
import {
  CreateBusInput,
  CreateBusOutput,
} from 'src/companies/dto/objects/bus/create-bus.dto';

@Resolver()
@UseGuards(JwtAuthGuard)
export class BusResolver {
  constructor(private readonly busService: BusObjectService) {}
  @Query(() => [Bus])
  async getBusCompanies() {
    return [];
  }

  @Mutation(() => CreateBusOutput)
  async createBus(
    @Args('input') input: CreateBusInput,
  ): Promise<CreateBusOutput> {
    return this.busService.createBus(input);
  }
}
