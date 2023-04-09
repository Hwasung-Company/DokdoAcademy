import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participant } from './entities/paricipants.entity';
import { In, Repository } from 'typeorm';
import { Tour } from './entities/tours.entity';
import { CreateParticipantsInput } from './dto/participants.dto';

@Injectable()
export class ParticipantsService {
    constructor(
        @InjectRepository(Participant)
        private readonly participantRepository: Repository<Participant>,
        @InjectRepository(Tour)
        private readonly tourRepository: Repository<Tour>,
    ) {}

    async createParticipants({
        tour_id,
        participants,
    }: CreateParticipantsInput): Promise<boolean> {
        try {
            const tour = await this.tourRepository.findOne({
                where: { _id: tour_id },
            });
            const newParticipants = participants.map((participant) => {
                const newOne = this.participantRepository.create(participant);
                newOne.tour = tour;
                return newOne;
            });

            await this.participantRepository.save(newParticipants);

            return true;
        } catch {
            return false;
        }
    }

    async getParticipants(tour_id: string): Promise<Participant[]> {
        return this.participantRepository.find({
            where: { tour: { _id: tour_id } },
            relations: ['tour'],
        });
    }

    async deleteParticipants(tour_id: string): Promise<boolean> {
        try {
            await this.participantRepository.delete({
                tour: { _id: tour_id },
            });
            return true;
        } catch {
            return false;
        }
    }
}
