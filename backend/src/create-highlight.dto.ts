export class CreateHighlightDTO {
    readonly highlightedText: string;
    readonly summary: string;

    constructor(summary: string, highlightedText: string) {
        this.summary = summary;
        this.highlightedText = highlightedText;
      }
  }
  