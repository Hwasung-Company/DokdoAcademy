import { UserRole } from '@libs/common/dist/entities/users/users.entity';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
    UserRoleGuard,
    UserRoles,
} from 'src/common/decorators/user-role.decorator';
import { CreateTourInput } from './dto/tour.dto';
import { Tour } from './entities/tours.entity';
import { ToursService } from './tours.service';

@Resolver(() => Tour)
@UseGuards(UserRoleGuard)
@UserRoles(UserRole.ADMIN)
@UseGuards(JwtAuthGuard)
export class ToursResolver {
    constructor(private readonly toursService: ToursService) {}

    @Query(() => [Tour])
    async toursBySection(@Args('section_id') section_id: string) {
        return await this.toursService.findBySection(section_id);
    }

    @Mutation(() => Boolean)
    async createTour(@Args('input') input: CreateTourInput) {
        return await this.toursService.create(input);
    }

    @Mutation(() => Boolean)
    async deleteTour(@Args('_id') _id: string) {
        return await this.toursService.delete(_id);
    }
}
