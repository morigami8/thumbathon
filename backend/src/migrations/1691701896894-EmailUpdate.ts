import { MigrationInterface, QueryRunner } from "typeorm";

export class EmailUpdate1691701896894 implements MigrationInterface {
    name = 'EmailUpdate1691701896894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "emailTest" TO "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "email" TO "emailTest"`);
    }

}
