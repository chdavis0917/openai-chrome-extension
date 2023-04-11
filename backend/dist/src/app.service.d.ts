import { Model } from 'mongoose';
import { Highlight } from './highlight.model';
import { OpenAIService } from './openai';
export declare class AppService {
    private readonly highlightModel;
    private readonly openai;
    constructor(highlightModel: Model<Highlight>, openai: OpenAIService);
    processHighlight(body: {
        url: string;
        highlightedText: string;
    }): Promise<{
        summary: import("openai").CreateCompletionResponseChoicesInner;
    }>;
}
