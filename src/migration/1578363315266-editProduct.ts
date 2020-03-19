import {MigrationInterface, QueryRunner} from "typeorm";

export class editProduct1578363315266 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "birthday"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "product" ADD "birthday" nvarchar(255) NOT NULL`, undefined);
    }

}
