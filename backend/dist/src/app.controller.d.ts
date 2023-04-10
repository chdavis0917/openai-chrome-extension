import { AppService } from './app.service';
import { Highlight } from './highlight.model';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    highlight(body: Highlight): Promise<{
        summary: string;
    }>;
}
