import { Model } from 'mongoose';
import { Highlight, HighlightDocument } from './highlight.model';
export declare class HighlightsService {
    private readonly highlightModel;
    constructor(highlightModel: Model<Highlight>);
    createHighlight(url: string, highlightedText: string): Promise<HighlightDocument>;
    findAll(): Promise<Highlight[]>;
    deleteHighlight(_id: string): Promise<Highlight>;
    updateHighlight(id: number, url: string, highlightedText: string): Promise<Highlight>;
}
