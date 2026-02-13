
import { GoogleGenAI } from "@google/genai";

export async function generateLovePoem(): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Write a short, heartwarming, and romantic 4-line poem for a girlfriend on Valentine's Day. Make it sweet and poetic.",
      config: {
        temperature: 0.9,
      }
    });
    
    return response.text || "Your love is like a melody,\nA song that fills my days,\nI'm grateful for your company,\nIn a thousand different ways.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "In every heart, a story grows,\nLike a blooming winter rose,\nMy love for you will always stay,\nForever and a single day.";
  }
}
