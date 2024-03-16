import { ManyToOne, Column, Entity, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Company } from "src/companies/entities/company.entity";

@Entity()
export class Job {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    salary: number;

    @Column()
    location: string;

    @ManyToOne(() => Company, company => company.jobs)
    @JoinColumn({name: 'company_id'})
    company: Company;

}
