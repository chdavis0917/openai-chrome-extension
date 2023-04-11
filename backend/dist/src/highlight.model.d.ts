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
/// <reference types="mongoose/types/inferschematype" />
import { Document, Types } from 'mongoose';
export type HighlightDocument = Highlight & Document;
export declare class Highlight {
    _id: Types.ObjectId;
    url: string;
    highlightedText: string;
    toJSON(): {
        _id: Types.ObjectId;
        url: string;
        highlightedText: string;
    };
    constructor(_id: Types.ObjectId, url: string, highlightedText: string);
}
export declare const HighlightSchema: import("mongoose").Schema<Highlight, import("mongoose").Model<Highlight, any, any, any, Document<unknown, any, Highlight> & Omit<Highlight & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Highlight, Document<unknown, {}, import("mongoose").FlatRecord<Highlight>> & Omit<import("mongoose").FlatRecord<Highlight> & Required<{
    _id: Types.ObjectId;
}>, never>>;
