import {
  Column,
  ManyToOne,
  JoinColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: "jobs" })
export class JobsEntity {
  @PrimaryGeneratedColumn("uuid")
  uid!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ length: 50 })
  company!: string;

  @Column({ name: "limit_date" })
  limitDate!: Date;

  @Column()
  status!: boolean;

  @Column({ name: "max_applicant" })
  maxApplicant!: number;

  @Column({ name: "id_recruiter" })
  recruiterId!: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "id_recruiter", referencedColumnName: "uid" })
  recruiterEntity?: UserEntity;

  //   @OneToMany(() => CandidateJobEntity, (entity) => entity.jobEntity)
  //   inscriptions?: CandidateJobEntity[];
}
