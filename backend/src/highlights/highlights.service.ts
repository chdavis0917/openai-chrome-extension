import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Highlight } from './highlight.entity';
import { CreateHighlightDto } from './dto/create-highlight.dto';
import { UpdateHighlightDto } from './dto/update-highlight.dto';

@Injectable()
export class HighlightsService {
  constructor(
    @InjectRepository(Highlight)
    private readonly highlightRepository: Repository<Highlight>,
  ) {}

  async create(createHighlightDto: CreateHighlightDto): Promise<Highlight> {
    const highlight = new Highlight();
    highlight.text = createHighlightDto.text;
    highlight.url = createHighlightDto.url;
    return this.highlightRepository.save(highlight);
  }

  async findAll(): Promise<Highlight[]> {
    return this.highlightRepository.find();
  }

  async findOne(id: string): Promise<Highlight> {
    return this.highlightRepository.findOne(id);
  }

  async update(
    id: string,
    updateHighlightDto: UpdateHighlightDto,
  ): Promise<Highlight> {
    const highlight = await this.highlightRepository.findOne(id);
    if (!highlight) {
      return null;
    }
    highlight.text = updateHighlightDto.text ?? highlight.text;
    highlight.url = updateHighlightDto.url ?? highlight.url;
    return this.highlightRepository.save(highlight);
  }

  async remove(id: string): Promise<void> {
    await this.highlightRepository.delete(id);
  }
}
