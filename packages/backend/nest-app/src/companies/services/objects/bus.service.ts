import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bus } from 'src/companies/entities/objects/bus.entity';
import { Repository } from 'typeorm';
import {
  CreateBusInput,
  CreateBusOutput,
} from 'src/companies/dto/objects/bus/create-bus.dto';
import { BusCompany } from 'src/companies/entities/companies/bus-company.entity';

@Injectable()
export class BusObjectService {
  constructor(
    @InjectRepository(Bus)
    private readonly busObjects: Repository<Bus>,
    @InjectRepository(BusCompany)
    private readonly busCompanies: Repository<BusCompany>,
  ) {}

  async createBus(input: CreateBusInput): Promise<CreateBusOutput> {
    try {
      const busCompany = await this.busCompanies.findOne({
        where: { _id: input.busCompanyId },
      });
      if (!busCompany) {
        return {
          ok: false,
          error: '버스 업체를 찾을 수 없습니다.',
        };
      }

      const bus = await this.busObjects.save(
        this.busObjects.create({
          ...input,
          busCompany,
        }),
      );

      if (!bus) {
        return {
          ok: false,
          error: '버스를 생성할 수 없습니다.',
        };
      }

      return {
        ok: true,
        message: '버스를 성공적으로 생성했습니다.',
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
