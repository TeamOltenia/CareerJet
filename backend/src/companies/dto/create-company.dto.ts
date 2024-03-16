import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly industry: string;

  @IsNotEmpty()
  readonly location: string;

  @IsNotEmpty()
  readonly numberOfEmployees: number;
}
