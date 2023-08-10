import { MigrationInterface, QueryRunner } from "typeorm";

export class UserDate1691704062353 implements MigrationInterface {
    name = 'UserDate1691704062353'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "dateCreated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "dateUpdated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "dateUpdated_at"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "dateCreated_at"`);
    }

}
