import {UserRole} from 'src/entities/users/users.entity'
import {CoreOutput} from 'src/dto/common/core.dto'

export interface CreateAccountDto {
    username: string;
    password: string;
    role: UserRole;
}

export interface CreateAccountOutput extends CoreOutput {}
