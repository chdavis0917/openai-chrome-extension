export type ReturnedHighlightData = {
  _id: string;
  url: string;
  highlightedText: string;
  summary: {
    text: string;
    index: number;
    logprobs: any;
    finish_reason: string;
  };
};

export type Highlight = {
  id: number;
  url: string;
  highlightedText: string;
};
