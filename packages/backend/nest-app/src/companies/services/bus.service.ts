import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusCompany } from 'src/companies/entities/bus-company.entity';
import { Repository } from 'typeorm';
import {
  CreateBusCompanyInput,
  CreateBusCompanyOutput,
} from 'src/companies/dto/bus/create/create-bus-company.dto';

@Injectable()
export class BusService {
  constructor(
    @InjectRepository(BusCompany)
    private readonly busCompanies: Repository<BusCompany>,
  ) {}

  async getBusCompanies(): Promise<BusCompany[]> {
    return await this.busCompanies.find();
  }

  async getBusCompany(_id: string): Promise<BusCompany> {
    return await this.busCompanies.findOne({ where: { _id } });
  }

  async createBusCompany(
    input: CreateBusCompanyInput,
  ): Promise<CreateBusCompanyOutput> {
    try {
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
