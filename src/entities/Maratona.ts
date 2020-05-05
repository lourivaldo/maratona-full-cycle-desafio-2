import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Maratona {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    aula: string;
}
