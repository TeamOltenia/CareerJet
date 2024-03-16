import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateJobDto {

    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly description: string;

    readonly salary: number;

    @IsNotEmpty()
    readonly location: string;

    @IsNotEmpty()
    readonly companyId: number;  
    
    constructor(partial: Partial<CreateJobDto>) {
        Object.assign(this, partial);
    }
}
