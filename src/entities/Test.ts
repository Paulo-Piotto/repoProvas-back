import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("tests")
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  subject: string;

  @Column()
  teacher: string;

  @Column()
  url: string;
}