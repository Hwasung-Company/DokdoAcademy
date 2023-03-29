import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Section } from './entities/sections.entity';

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
}
