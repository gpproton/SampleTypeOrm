import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Person {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    description: string;

}
