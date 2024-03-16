import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApplicationStatus } from 'src/enums/application-status';
import { User } from 'src/users/entities/user.entity';
import { Job } from 'src/jobs/entities/job.entity';

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  jobId: number;

  @Column()
  resumePath: string;

  @Column()
  applicationDate: Date;

  @Column()
  status: ApplicationStatus;

  @ManyToOne(() => Job, (job) => job.jobApplicants)
  job: Job;

  @ManyToOne(() => User, (user) => user.userJobs)
  user: User;
}
