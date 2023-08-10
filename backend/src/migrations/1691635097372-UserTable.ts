import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTable1691635097372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "emailTest" to "email"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "email" to "emailTest"`,
    );
  }
}
