import { EntityRepository, MongoRepository } from 'typeorm';
import { Highlight } from './highlight.entity';

@EntityRepository(Highlight)
export class HighlightsRepository extends MongoRepository<Highlight> {
  // Implement any additional methods here
}
