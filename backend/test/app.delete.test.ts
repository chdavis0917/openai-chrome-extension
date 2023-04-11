import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../src/app.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Highlight } from '../src/highlight.model';
import { DeleteResult } from 'mongodb';

describe('AppService', () => {
    let appService: AppService;
    let highlightModel: Model<Highlight>;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          AppService,
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
    });
  
    describe('deleteHighlight', () => {
      it('should delete the highlight with the given ID', async () => {
        const highlightId = '123';
        const deleteSpy = jest.spyOn(highlightModel, 'deleteOne').mockResolvedValue(<DeleteResult>{ deletedCount: 0, acknowledged: true });
        await appService.deleteHighlight(highlightId);
        expect(deleteSpy).toHaveBeenCalledWith({ _id: highlightId });
      });
  
      it('should throw an error if the highlight is not found', async () => {
        const highlightId = '123';
        jest.spyOn(highlightModel, 'deleteOne').mockResolvedValue(<DeleteResult>{ deletedCount: 0, acknowledged: true });
        await expect(appService.deleteHighlight(highlightId)).rejects.toThrow();
      });
    });
  });
