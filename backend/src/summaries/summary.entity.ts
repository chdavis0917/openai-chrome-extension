import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Summary {
  @ObjectIdColumn()
  id: string;

  @Column()
  userId: string;

  @Column()
  url: string;

  @Column()
  summary: string;

  @Column()
  highlightedText: string;

  @Column({ type: 'date' })
  createdAt: Date;

  constructor(userId: string, url: string, summary: string, highlightedText: string) {
    this.userId = userId;
    this.url = url;
    this.summary = summary;
    this.highlightedText = highlightedText;
    this.createdAt = new Date();
  }
}
