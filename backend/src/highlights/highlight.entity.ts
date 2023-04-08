import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Highlight {
  @ObjectIdColumn()
  id: string;

  @Column()
  summaryId: string;

  @Column()
  userId: string;

  @Column()
  content: string;

  @Column()
  createdDate: Date;
}
