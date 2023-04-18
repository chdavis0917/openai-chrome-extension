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

  describe('createHighlight', () => {
    it('should create a new highlight and return it', async () => {
      const url = 'http://example.com';
      const highlightedText = 'This is a highlighted text';
      const newHighlight = { _id: new Types.ObjectId().toHexString(), url, highlightedText };
      jest.spyOn(highlightModel.prototype, 'save').mockResolvedValueOnce(newHighlight as HighlightDocument);
      const result = await highlightsService.createHighlight(url, highlightedText);
      expect(result).toEqual(newHighlight);
    });
  });

  describe('findAll', () => {
    it('should return an array of highlights', async () => {
      const highlights = [
        { _id: new Types.ObjectId().toHexString(), url: 'http://example.com', highlightedText: 'This is a highlighted text' },
        { _id: new Types.ObjectId().toHexString(), url: 'http://example.org', highlightedText: 'This is another highlighted text' },
      ];
      jest.spyOn(highlightModel, 'find').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(highlights as HighlightDocument[]),
      } as any);
      const result = await highlightsService.findAll();
      expect(result).toEqual(highlights);
    });
  });
});
