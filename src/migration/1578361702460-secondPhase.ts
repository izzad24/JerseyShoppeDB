import {MigrationInterface, QueryRunner} from "typeorm";

export class secondPhase1578361702460 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "lineitem" ("id" int NOT NULL IDENTITY(1,1), "purchase_id" int NOT NULL, "qty" int NOT NULL, "price" int NOT NULL, "total_price" int NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_68ec4021449f2f16570aa084d84" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_2b1b1e6dd5b32c4872d6054bd85" DEFAULT getdate(), CONSTRAINT "PK_36b5b1abdaaaebe6ce0ed4c4ec0" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "purchase" ("id" int NOT NULL IDENTITY(1,1), "user_id" int NOT NULL, "total_price" int NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_c3d99c5a7cd9fd0f1db3cd49852" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_0031908ce026d9ee9b30f71c761" DEFAULT getdate(), CONSTRAINT "PK_86cc2ebeb9e17fc9c0774b05f69" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "purchase"`, undefined);
        await queryRunner.query(`DROP TABLE "lineitem"`, undefined);
    }

}
