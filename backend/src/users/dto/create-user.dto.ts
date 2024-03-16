import {Exclude} from 'class-transformer'
import {IsEmail, IsNotEmpty} from 'class-validator'

export class CreateUserDto {

    @IsNotEmpty()
    readonly username: string;

    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @Exclude()
    readonly password: string;

    constructor(partial: Partial<CreateUserDto>) {
        Object.assign(this, partial);
    }
}
