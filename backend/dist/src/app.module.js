"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const highlights_module_1 = require("./highlights.module");
const mongoose_1 = require("@nestjs/mongoose");
const highlight_model_1 = require("./highlight.model");
const highlights_service_1 = require("./highlights.service");
const openai_1 = require("./openai");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost/highlights'),
            mongoose_1.MongooseModule.forFeature([{ name: highlight_model_1.Highlight.name, schema: highlight_model_1.HighlightSchema }]),
            highlights_module_1.HighlightsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, highlights_service_1.HighlightsService, openai_1.OpenAIService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map