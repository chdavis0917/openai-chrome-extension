"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
let OpenAIService = class OpenAIService {
    constructor() {
        const configuration = new openai_1.Configuration({
            organization: "org-wq5D7NEcbOTQS0V4mbgr2Ffd",
            apiKey: "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",
        });
        this.openai = new openai_1.OpenAIApi(configuration);
    }
    generateSummary(highlightedText) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("What is OpenAI?", OpenAIApi);
            const prompt = `Please summarize the following text: "${highlightedText}"`;
            // console.log("openai is defined as:", this.openai);
            const response = yield this.openai.createCompletion({
                model: "text-davinci-001",
                prompt,
                max_tokens: 7,
                temperature: 0,
            });
            // console.log("response is:", response);
            // Wait for 5 seconds before making the next request
            yield new Promise(resolve => setTimeout(resolve, 5000));
            // const result = response.data;
            return "hi";
        });
    }
};
OpenAIService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OpenAIService);
exports.OpenAIService = OpenAIService;
//# sourceMappingURL=openai.js.map