import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import { UserRole, Users as IUser } from '@common/entities/users/users.entity';

import * as bcrypt from 'bcrypt';
import { CoreEntity } from 'src/common/entities/core.entity';

registerEnumType(UserRole, { name: 'UserRole' });

@ObjectType()
@Entity()
export class Users extends CoreEntity implements IUser {
  @Field((type) => String)
  @Column({ unique: true })
  username: string;

  @Field((type) => String)
  @Column({ select: false })
  password: string;

  @Field((type) => String)
  @Column({ nullable: true })
  name: string;

  @Field((type) => String)
  @Column({ unique: true, nullable: true })
  email: string;

  @Field((type) => String)
  @Column({ unique: true, nullable: true })
  phone: string;

  @Field((type) => String)
  @Column({ nullable: true })
  avatar: string;

  @Field((type) => UserRole)
  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (error) {
        console.log(error);
        throw new Error('Could not hash password');
      }
    }
  }

  async checkPassword(aPassword: string): Promise<boolean> {
    try {
      const ok = await bcrypt.compare(aPassword, this.password);
      return ok;
    } catch (error) {
      console.log(error);
      throw new Error('Could not compare password');
    }
  }
}
