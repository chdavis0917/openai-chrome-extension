import { EntityRepository, MongoRepository } from 'typeorm';
import { Highlight } from './entities/highlight.entity';

@EntityRepository(Highlight)
export class HighlightsRepository extends MongoRepository<Highlight> {
  // Implement any additional methods here
}
