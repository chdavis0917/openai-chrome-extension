export declare class OpenAIService {
    private readonly openai;
    constructor();
    generateSummary(highlightedText: string): Promise<import("openai").CreateCompletionResponseChoicesInner>;
}
