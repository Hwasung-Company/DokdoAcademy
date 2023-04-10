import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CustomUuidScalar } from 'src/common/scalars/uuid';
import { CompaniesModule } from 'src/companies/companies.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
    UserRoleGuard,
    USER_ROLE_KEY,
} from './common/decorators/user-role.decorator';
import { SectionsModule } from './sections/sections.module';
import { ToursModule } from './tours/tours.module';
import { UsersModule } from './users/users.module';
import { SchedulesModule } from './schedules/schedules.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),

        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 3347,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [
                __dirname + '/**/entities/*.entity{.ts,.js}',
                __dirname + '/**/entities/**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            autoSchemaFile: 'schema.gql',
            resolvers: { UUID: CustomUuidScalar },
        }),
        UsersModule,
        AuthModule,
        CompaniesModule,
        SectionsModule,
        ToursModule,
        SchedulesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
