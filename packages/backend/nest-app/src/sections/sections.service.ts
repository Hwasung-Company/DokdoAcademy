import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Section } from './entities/sections.entity';
import { CreateSectionInput } from './dto/create-section.dto';

@Injectable()
export class SectionsService {
    constructor(
        @InjectRepository(Section)
        private readonly sectionsRepository: Repository<Section>,
    ) {}

    async findAll(): Promise<Section[]> {
        return this.sectionsRepository.find();
    }

    async findOne(_id: string): Promise<Section> {
        return this.sectionsRepository.findOne({
            where: {
                _id,
            },
        });
    }

    async create(input: CreateSectionInput): Promise<Section> {
        return this.sectionsRepository.save(
            this.sectionsRepository.create(input),
        );
    }

    async delete(_id: string): Promise<boolean> {
        const result = await this.sectionsRepository.delete(_id);
        return result.affected > 0;
    }
}
