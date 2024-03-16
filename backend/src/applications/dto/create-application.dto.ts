import { ApplicationStatus } from 'src/enums/application-status';
import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateApplicationDto {
  @IsNotEmpty()
  readonly userId: number;

  @IsNotEmpty()
  readonly jobId: number;

  @IsNotEmpty()
  readonly resumePath: string;

  @IsDate()
  readonly applicationDate: Date;

  @IsNotEmpty()
  readonly status: ApplicationStatus;
}
