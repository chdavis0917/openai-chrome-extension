import { HighlightsService } from './highlights.service';
import { OpenAIService } from './openai';
export declare class HighlightsController {
    private readonly highlightsService;
    private readonly openaiService;
    constructor(highlightsService: HighlightsService, openaiService: OpenAIService);
    getSummary(body: {
        url: string;
        highlightedText: string;
    }): Promise<import("./highlight.model").HighlightDocument>;
    findAll(): Promise<{
        summary: import("openai").CreateCompletionResponseChoicesInner;
        id: number;
        url: string;
        highlightedText: string;
    }[]>;
}
