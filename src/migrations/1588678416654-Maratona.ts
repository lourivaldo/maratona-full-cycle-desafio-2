import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class Maratona1588678416654 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "maratona",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "aula",
                    type: "varchar",
                }
            ]
        }), true)

        // await queryRunner.createIndex("maratona", new TableIndex({
        //     name: "idx_maratona_aula",
        //     columnNames: ["aula"]
        // }));

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        // await queryRunner.dropIndex("maratona", "idx_maratona_aula");
        await queryRunner.dropTable("maratona");
    }

}
