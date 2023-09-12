import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitMigration1694489830583 implements MigrationInterface {
  name = 'InitMigration1694489830583';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "dateCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "dateUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "image" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "Users_id" integer NOT NULL, "dateCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "dateUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "image" ADD CONSTRAINT "FK_28910a726660ce212b6f4bc2b7c" FOREIGN KEY ("Users_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "image" DROP CONSTRAINT "FK_28910a726660ce212b6f4bc2b7c"`,
    );
    await queryRunner.query(`DROP TABLE "image"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
