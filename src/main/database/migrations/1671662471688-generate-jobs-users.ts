import { MigrationInterface, QueryRunner } from "typeorm";

export class generateJobsUsers1671662471688 implements MigrationInterface {
    name = 'generateJobsUsers1671662471688'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "company" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "company" SET NOT NULL`);
    }

}
