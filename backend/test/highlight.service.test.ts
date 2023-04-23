import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';
import { HighlightsService } from '../src/highlights.service';
import { Highlight, HighlightDocument } from '../src/highlight.model';

describe('HighlightsService', () => {
  let highlightsService: HighlightsService;
  let highlightModel: Model<HighlightDocument>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        HighlightsService,
        {
          provide: getModelToken(Highlight.name),
          useValue: {
            new: jest.fn(),
            constructor: jest.fn(),
            find: jest.fn(),
            findById: jest.fn(),
            updateOne: jest.fn(),
            deleteOne: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    highlightsService = moduleRef.get<HighlightsService>(HighlightsService);
    highlightModel = moduleRef.get<Model<HighlightDocument>>(getModelToken(Highlight.name));
  });

  describe('findAll', () => {
    it('should return an array of highlights', async () => {
      const highlights = [
        new Highlight(new Types.ObjectId(), 'http://example.com', 'This is a highlighted text', 'this is a summary'),
        new Highlight(new Types.ObjectId(), 'http://example.org', 'This is another highlighted text', 'this is another summary'),
      ];
      jest.spyOn(highlightModel, 'find').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(highlights as HighlightDocument[]),
      } as any);
      const result = await highlightsService.findAll();
      expect(result).toEqual(highlights);
    });
  });
});
