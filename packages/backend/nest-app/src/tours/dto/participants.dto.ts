import { Field, InputType, OmitType } from '@nestjs/graphql';
import { Participant } from '../entities/paricipants.entity';

@InputType()
export class CreateParticipantsInput {
    @Field(() => String)
    tour_id: string;

    @Field(() => [OmitParticipant])
    participants: OmitParticipant[];
}

@InputType()
export class OmitParticipant extends OmitType(Participant, [
    'tour',
    'group',
    '_id',
    'createdAt',
    'updatedAt',
] as const) {}
