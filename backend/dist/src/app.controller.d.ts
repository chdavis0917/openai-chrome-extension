import { AppService } from './app.service';
import { Highlight } from './highlight.model';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    highlight(body: Highlight): Promise<{
        summary: import("openai").CreateCompletionResponseChoicesInner;
    }>;
    deleteHighlight(id: string): Promise<{
        message: string;
    }>;
}
