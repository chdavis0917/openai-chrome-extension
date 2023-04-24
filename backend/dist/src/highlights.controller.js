"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
const express = __importStar(require("express"));
let HighlightsController = class HighlightsController {
    constructor(highlightsService, openaiService) {
        this.highlightsService = highlightsService;
        this.openaiService = openaiService;
    }
    getSummary(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const summary = yield this.openaiService.generateSummary(body.highlightedText);
            if (summary.text) {
                const newHighlight = yield this.highlightsService.createHighlight(body.url, body.highlightedText, summary.text);
                return newHighlight;
            }
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
    configure(consumer) {
        consumer
            .apply(express.json(), express.urlencoded({ extended: true }), express.static('public'), (req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            next();
        })
            .forRoutes('*');
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