import { MigrationInterface, QueryRunner } from "typeorm";

export class ImageTable1691697810939 implements MigrationInterface {
    name = 'ImageTable1691697810939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "original_url"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "thumbnail_url"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "image" ADD "url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "image" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_b0b068a2be3e9a2ed6052786781" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_b0b068a2be3e9a2ed6052786781"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "url"`);
        await queryRunner.query(`ALTER TABLE "image" ADD "status" text NOT NULL DEFAULT 'pending'`);
        await queryRunner.query(`ALTER TABLE "image" ADD "thumbnail_url" character varying(500)`);
        await queryRunner.query(`ALTER TABLE "image" ADD "original_url" character varying(500) NOT NULL`);
    }

}
