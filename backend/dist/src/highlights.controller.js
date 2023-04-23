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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.HighlightsController = void 0;
const common_1 = require("@nestjs/common");
const highlights_service_1 = require("./highlights.service");
const openai_1 = require("./openai");
let HighlightsController = class HighlightsController {
    constructor(highlightsService, openaiService) {
        this.highlightsService = highlightsService;
        this.openaiService = openaiService;
    }
    getSummary(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const summary = yield this.openaiService.generateSummary(body.highlightedText);
            const newHighlight = yield this.highlightsService.createHighlight(body.url, body.highlightedText);
            return newHighlight;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const highlights = yield this.highlightsService.findAll();
            const summaryPromises = highlights.map((highlight) => this.openaiService.generateSummary(highlight.highlightedText));
            const summaries = yield Promise.all(summaryPromises);
            return highlights.map((highlight, index) => (Object.assign(Object.assign({}, highlight.toJSON()), { summary: summaries[index] })));
        });
    }
    deleteHighlight(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.highlightsService.deleteHighlight(_id);
            return { message: `Highlight with id ${_id} has been deleted` };
        });
    }
};
__decorate([
    (0, common_1.Post)('summary'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HighlightsController.prototype, "getSummary", null);
__decorate([
    (0, common_1.Get)('highlights'),
    (0, common_1.Header)('Access-Control-Allow-Origin', '*') // add this line to set the header
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HighlightsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)('highlights/:_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HighlightsController.prototype, "deleteHighlight", null);
HighlightsController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [highlights_service_1.HighlightsService,
        openai_1.OpenAIService])
], HighlightsController);
exports.HighlightsController = HighlightsController;
//# sourceMappingURL=highlights.controller.js.map