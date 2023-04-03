import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tour } from './entities/tours.entity';
import { Repository } from 'typeorm';
import { CreateTourInput } from './dto/tour.dto';
import { Section } from 'src/sections/entities/sections.entity';

@Injectable()
export class ToursService {
    constructor(
        @InjectRepository(Tour)
        private readonly toursRepository: Repository<Tour>,
        @InjectRepository(Section)
        private readonly sectionsRepository: Repository<Section>,
    ) {}

    async create(input: CreateTourInput) {
        try {
            const tour = this.toursRepository.create(input);
            const section = await this.sectionsRepository.findOne({
                where: { _id: input.section_id },
            });
            tour.section = section;

            await this.toursRepository.save(tour);
            console.log(tour);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async findBySection(section_id: string) {
        return await this.toursRepository.find({
            where: { section_id: section_id },
        });
    }

    async delete(_id: string) {
        const result = await this.toursRepository.delete(_id);
        return result.affected > 0;
    }
}
