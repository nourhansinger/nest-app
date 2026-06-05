import { IsNotEmpty, IsNumber} from 'class-validator';

export class CreateCourseDto {

  @IsNotEmpty()
  name!: string;
  @IsNumber()
  grade!: number;
  studentIds!: number[];
}
