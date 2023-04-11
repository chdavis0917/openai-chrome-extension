import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenAIService {
  private readonly openai: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(configuration);
  }
  
  async generateSummary(highlightedText: string) {
    try {
      const prompt = `Please summarize the following text: "${highlightedText}"`;
  
  
      const response = await this.openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        max_tokens: 100,
        temperature: 0.5,
      });
  
      // Wait for 5 seconds before making the next request
      await new Promise(resolve => setTimeout(resolve, 5000));
  
      const result = response.data;
      return result.choices[0];
    } catch (err: any) {
      console.error("Error in generateSummary:", err.response?.data);
      throw err;
    }
  }
}
