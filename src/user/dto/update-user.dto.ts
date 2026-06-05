import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateUserDto {  
    @IsEmail()
    firstName?: string;
    lastName?: string;
    age?: number;
    @IsEmail()
    email?: string;
    @IsNotEmpty()
    password?: string
}