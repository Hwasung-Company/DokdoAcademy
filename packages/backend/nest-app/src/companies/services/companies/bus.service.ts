import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusCompany } from 'src/companies/entities/companies/bus-company.entity';
import { Like, Repository } from 'typeorm';
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

@Injectable()
export class BusService {
  constructor(
    @InjectRepository(BusCompany)
    private readonly busCompanies: Repository<BusCompany>,
  ) {}

  async getBusCompanies({
    page,
  }: GetBusCompaniesInput): Promise<GetBusCompaniesOutput> {
    const companies = await this.busCompanies.find({
      skip: (page - 1) * 12,
      take: 12,
    });

    const total = await this.busCompanies.count();

    return {
      data: companies,
      total,
      page,
      totalPage: Math.ceil(total / 12),
    };
  }

  async getBusCompany(name: string): Promise<BusCompany> {
    return await this.busCompanies.findOne({ where: { name } });
  }

  async searchBusCompanies({
    name,
  }: SearchBusCompaniesInput): Promise<SearchBusCompaniesOutput> {
    const companies = await this.busCompanies.find({
      where: { name: Like(`%${name}%`) },
    });

    const total = await this.busCompanies.count();

    return {
      data: companies,
      total,
      page: 1,
      totalPage: Math.ceil(total / 12),
    };
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

  async deleteBusCompany(
    input: DeleteBusCompanyInputs,
  ): Promise<DeleteBusCompanyOutput> {
    try {
      const result = await this.busCompanies.delete(input._ids);
      if (result.affected === 0) {
        return {
          ok: false,
          error: '해당 업체를 찾을 수 없습니다.',
        };
      }
      return {
        ok: true,
        message: result.affected + '개의 업체 삭제가 완료되었습니다.',
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
