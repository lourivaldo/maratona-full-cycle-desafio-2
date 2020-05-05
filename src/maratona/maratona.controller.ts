import {Controller, Get, Post, Req, Request} from '@nestjs/common';
import {MaratonaService} from "./maratona.service";

@Controller('maratona')
export class MaratonaController {

    constructor(private maratonaService: MaratonaService) {
    }

    @Get()
    async findAll(@Req() request: Request) {
        return (await this.maratonaService.findAll()).map(v => {
            return {id: v.id, aula: v.aula};
        });
    }

    @Post()
    async create(@Req() request: Request) {
        return await this.maratonaService.create(request.body as any);
    }
}
