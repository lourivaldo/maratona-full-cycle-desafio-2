import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Maratona} from "./entities/Maratona";
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaratonaController } from './maratona/maratona.controller';
import {MaratonaService} from "./maratona/maratona.service";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'database.sqlite',
          entities: [Maratona],
          synchronize: true,
      }),
      TypeOrmModule.forFeature([ Maratona ])
  ],
  controllers: [AppController, MaratonaController],
  providers: [AppService, MaratonaService, ],
})
export class AppModule {}
