import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Participant } from './entities/paricipants.entity';
import { CreateParticipantsInput } from './dto/participants.dto';
import { ParticipantsService } from './participants.service';

@Resolver(() => Participant)
export class ParticipantsResolver {
    constructor(private readonly participantsService: ParticipantsService) {}

    @Mutation(() => Boolean)
    createParticipants(@Args('input') input: CreateParticipantsInput) {
        return this.participantsService.createParticipants(input);
    }

    @Query(() => [Participant])
    getParticipants(@Args('tour_id') tour_id: string) {
        return this.participantsService.getParticipants(tour_id);
    }

    @Mutation(() => Boolean)
    deleteParticipants(@Args('tour_id') tour_id: string) {
        return this.participantsService.deleteParticipants(tour_id);
    }
}
