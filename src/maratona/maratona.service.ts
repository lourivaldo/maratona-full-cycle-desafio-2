import {Controller, Get, Injectable, Post, Req} from '@nestjs/common';
import {Maratona} from "../entities/Maratona";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class MaratonaService {

    constructor(
        @InjectRepository(Maratona)
        private maratonaRepository: Repository<Maratona>,
    ) {}

    findAll(): Promise<Maratona[]> {
        return this.maratonaRepository.find();
    }

    create(maratona): Promise<Maratona> {
        const m = new Maratona();
        m.aula = maratona.aula;
        return this.maratonaRepository.save(m);
    }
}
