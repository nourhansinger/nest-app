import { IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
export class CreateUserDto {

@IsNotEmpty()
 firstName!: string;
 lastName!: string;

@IsNumber() 
 age!: number;

@IsEmail()
  email!: string;

@IsNotEmpty()
  password!: string;
  
  courseIds!: number[];
  
}