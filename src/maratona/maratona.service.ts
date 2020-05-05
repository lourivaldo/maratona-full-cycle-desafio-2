import {Controller, Get, Injectable, Post, Req} from '@nestjs/common';
import {Maratona} from "./maratona.model";
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

    async create(maratona): Promise<any> {
        const m = this.maratonaRepository.create(maratona);
        await this.maratonaRepository.save(m);
        return m;
    }
}
