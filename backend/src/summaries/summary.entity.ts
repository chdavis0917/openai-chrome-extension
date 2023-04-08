import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Summary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  url: string;

  @Column()
  summary: string;

  @Column()
  highlightedText: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  constructor(id: string, userId: string, url: string, summary: string, highlightedText: string, createdAt: Date) {
    this.id = id;
    this.userId = userId;
    this.url = url;
    this.summary = summary;
    this.highlightedText = highlightedText;
    this.createdAt = createdAt;
  }
}
