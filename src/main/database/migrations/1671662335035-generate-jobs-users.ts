import { MigrationInterface, QueryRunner } from "typeorm";

export class generateJobsUsers1671662335035 implements MigrationInterface {
    name = 'generateJobsUsers1671662335035'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "username" character varying(50) NOT NULL, "password" character varying(100) NOT NULL, "profile" character varying(20) NOT NULL, "email" character varying(50) NOT NULL, "company" character varying(50) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_6e20ce1edf0678a09f1963f9587" PRIMARY KEY ("uid"))`);
        await queryRunner.query(`CREATE TABLE "jobs" ("uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" text NOT NULL, "company" character varying(50) NOT NULL, "limit_date" TIMESTAMP NOT NULL, "status" boolean NOT NULL, "max_applicant" integer NOT NULL, "id_recruiter" uuid NOT NULL, CONSTRAINT "PK_8e7c96ce120c62d451d90c7b32b" PRIMARY KEY ("uid"))`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD CONSTRAINT "FK_6dd5c65ff0ae0adfd676e58ecef" FOREIGN KEY ("id_recruiter") REFERENCES "users"("uid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jobs" DROP CONSTRAINT "FK_6dd5c65ff0ae0adfd676e58ecef"`);
        await queryRunner.query(`DROP TABLE "jobs"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
