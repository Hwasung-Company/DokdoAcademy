import {CoreEntity} from 'src/entities/core/core.entity'

export interface Users extends CoreEntity {
    name: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    avatar: string;
    role: UserRole;
}

export enum UserRole {
    ADMIN = 'ADMIN',
    GUIDE = 'GUIDE',
    COLLABORATOR = 'COLLABORATOR',
}
