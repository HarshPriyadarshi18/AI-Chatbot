import OpenAI from "openai";
import { Assistance as openaiAssistance } from ".../Assistance/openai";
const openai = new OpenAI(
    {
        apiKey:import.meta.env.VITE_OPEN_AI_API_KEY,
        dangerouslyAllowBrowser:true,
    }
);
export class Assistance{
    #model;
    constructor(model="gpt-4o-mini"){
      this.#model=model
    }
  
}




