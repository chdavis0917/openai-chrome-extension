/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { HighlightsService } from './highlights.service';
import { OpenAIService } from './openai';
export declare class HighlightsController {
    private readonly highlightsService;
    private readonly openaiService;
    constructor(highlightsService: HighlightsService, openaiService: OpenAIService);
    getSummary(body: {
        url: string;
        highlightedText: string;
    }): Promise<import("./highlight.model").HighlightDocument | undefined>;
    findAll(): Promise<{
        summary: import("openai").CreateCompletionResponseChoicesInner;
        _id: import("mongoose").Types.ObjectId;
        url: string;
        highlightedText: string;
    }[]>;
    deleteHighlight(_id: string): Promise<{
        message: string;
    }>;
    configure(consumer: import('@nestjs/common').MiddlewareConsumer): void;
}
