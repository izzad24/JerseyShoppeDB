import {MigrationInterface, QueryRunner} from "typeorm";

export class firstPhase1577779570870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "product" ("id" int NOT NULL IDENTITY(1,1), "product_name" nvarchar(255) NOT NULL, "qty" int NOT NULL, "max_qty" int NOT NULL, "price" int NOT NULL, "total_price" int NOT NULL, "details" nvarchar(255) NOT NULL, "birthday" nvarchar(255) NOT NULL, "img_url" nvarchar(255) NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_91b4f645f7fe267179af692bf09" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_4a5ee402c3f5d53ce5c768da158" DEFAULT getdate(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "mobile" int NOT NULL, "email" nvarchar(255) NOT NULL, "birthday" nvarchar(255) NOT NULL, "gender" nvarchar(255) NOT NULL, "img_url" nvarchar(255) NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_d091f1d36f18bbece2a9eabc6e0" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_9cdce43fa0043c794281aa09051" DEFAULT getdate(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "product"`, undefined);
    }

}
