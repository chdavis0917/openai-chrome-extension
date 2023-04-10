import { Model } from 'mongoose';
import { Highlight, HighlightDocument } from './highlight.model';
import { ConfigService } from '@nestjs/config';
export declare class HighlightsService {
    private readonly highlightModel;
    private readonly configService;
    constructor(highlightModel: Model<Highlight>, configService: ConfigService);
    createHighlight(url: string, highlightedText: string): Promise<HighlightDocument>;
    findAll(): Promise<Highlight[]>;
    deleteHighlight(id: number): Promise<Highlight>;
    updateHighlight(id: number, url: string, highlightedText: string): Promise<Highlight>;
}
