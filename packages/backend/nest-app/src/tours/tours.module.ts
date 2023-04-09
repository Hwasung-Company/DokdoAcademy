import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/groups.entity';
import { Participant } from './entities/paricipants.entity';
import { Tour } from './entities/tours.entity';
import { ToursResolver } from './tours.resolver';
import { ToursService } from './tours.service';
import { Section } from 'src/sections/entities/sections.entity';
import { ParticipantsResolver } from './participants.resolver';
import { ParticipantsService } from './participants.service';

@Module({
    imports: [TypeOrmModule.forFeature([Tour, Participant, Group, Section])],
    controllers: [],
    providers: [
        ToursResolver,
        ToursService,
        ParticipantsResolver,
        ParticipantsService,
    ],
})
export class ToursModule {}
