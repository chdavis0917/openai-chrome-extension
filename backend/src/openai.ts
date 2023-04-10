import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenAIService {
  private readonly openai: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      organization: process.env.ORGANIZATION,
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(configuration);
  }
  
  async generateSummary(highlightedText: string) {
    // console.log("What is OpenAI?", OpenAIApi);
    const prompt = `Please summarize the following text: "${highlightedText}"`;
    // console.log("openai is defined as:", this.openai);
  
    const response = await this.openai.createCompletion({
      model: "text-davinci-001",
      prompt,
      max_tokens: 7,
      temperature: 0,
    });
  
    // console.log("response is:", response);
  
    // Wait for 5 seconds before making the next request
    await new Promise(resolve => setTimeout(resolve, 5000));
  
    // const result = response.data;
    return "hi";
  }
  
}
