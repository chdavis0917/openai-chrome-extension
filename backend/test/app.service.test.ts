import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../src/app.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Highlight } from '../src/highlight.model';
import { OpenAIService } from '../src/openai';

describe('AppService', () => {
  let appService: AppService;
  let highlightModel: Model<Highlight>;
  let openaiService: OpenAIService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        OpenAIService,
        {
          provide: getModelToken(Highlight.name),
          useValue: {
            new: jest.fn().mockResolvedValue({}),
            constructor: jest.fn().mockResolvedValue({}),
            find: jest.fn(),
            findById: jest.fn(),
            findOne: jest.fn(),
            updateOne: jest.fn(),
            deleteOne: jest.fn(),
            createIndex: jest.fn(),
            countDocuments: jest.fn(),
            findOneAndUpdate: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    appService = module.get<AppService>(AppService);
    highlightModel = module.get<Model<Highlight>>(getModelToken(Highlight.name));
    openaiService = module.get<OpenAIService>(OpenAIService);
  });

  describe('processHighlight', () => {
    it('should call OpenAIService.generateSummary with body.highlightedText', async () => {
      const generateSummarySpy = jest.spyOn(openaiService, 'generateSummary');
      const highlightedText = 'This is a highlighted text';
      const url = 'http://example.com';
      const body = { url, highlightedText };
      await appService.processHighlight(body);
      expect(generateSummarySpy).toHaveBeenCalledWith(highlightedText);
    });
  });
});
