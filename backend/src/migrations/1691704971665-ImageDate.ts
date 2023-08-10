import { MigrationInterface, QueryRunner } from "typeorm";

export class ImageDate1691704971665 implements MigrationInterface {
    name = 'ImageDate1691704971665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" ADD "dateCreated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "image" ADD "dateUpdated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "dateUpdated_at"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "dateCreated_at"`);
    }

}
