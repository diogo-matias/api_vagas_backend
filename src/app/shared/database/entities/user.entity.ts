import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  uid!: string;

  @Column({ length: 50 })
  name!: string;

  @Column({ unique: true, length: 50 })
  username!: string;

  @Column({ length: 100 })
  password!: string;

  @Column({ length: 20 })
  profile!: string;

  @Column({ length: 50 })
  email!: string;

  @Column({ length: 50, nullable: true })
  company!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
