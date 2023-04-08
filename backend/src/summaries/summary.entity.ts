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
}
