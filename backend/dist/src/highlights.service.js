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
exports.HighlightsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const highlight_model_1 = require("./highlight.model");
let HighlightsService = class HighlightsService {
    constructor(highlightModel) {
        this.highlightModel = highlightModel;
    }
    createHighlight(url, highlightedText, summary) {
        return __awaiter(this, void 0, void 0, function* () {
            const highlight = new this.highlightModel({
                _id: new mongoose_2.Types.ObjectId(),
                url,
                highlightedText,
                summary
            });
            return yield highlight.save();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.highlightModel.find().exec();
        });
    }
    deleteHighlight(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const highlight = yield this.highlightModel.findOneAndRemove({ _id: new mongoose_2.Types.ObjectId(_id) }).exec();
            if (!highlight) {
                throw new Error(`Highlight with _id ${_id} not found`);
            }
            return highlight;
        });
    }
    updateHighlight(id, url, highlightedText) {
        return __awaiter(this, void 0, void 0, function* () {
            const highlight = yield this.highlightModel.findOne({ id }).exec();
            if (!highlight) {
                throw new Error(`Highlight with ID ${id} not found`);
            }
            highlight.url = url;
            highlight.highlightedText = highlightedText;
            return yield highlight.save();
        });
    }
};
HighlightsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(highlight_model_1.Highlight.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HighlightsService);
exports.HighlightsService = HighlightsService;
//# sourceMappingURL=highlights.service.js.map