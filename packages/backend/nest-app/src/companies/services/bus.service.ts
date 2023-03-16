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
      const exists = await this.busCompanies.findOne({
        where: { name: input.name },
      });
      if (exists) {
        return {
          ok: false,
          error: '이미 사용 중인 업체 이름입니다.',
        };
      }
      const newBusCompany = await this.busCompanies.create(input);
      const result = await this.busCompanies.save(newBusCompany);
      return {
        ok: true,
        message: '업체 등록이 완료되었습니다.',
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
