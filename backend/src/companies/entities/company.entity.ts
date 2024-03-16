import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Job } from 'src/jobs/entities/job.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  industry: string;

  @Column()
  location: string;

  @Column()
  numberOfEmployees: number;

  @OneToMany( () => Job, job => job.company)
  jobs: Job[]
  
}
