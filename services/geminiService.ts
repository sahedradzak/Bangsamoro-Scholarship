
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const askGemini = async (prompt: string) => {
  if (!API_KEY) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are an expert Scholarship Counselor for the State Scholarship Portal. 
        Your job is to help students find suitable scholarships based on their profile. 
        Be professional, helpful, and concise. 
        If asked about eligibility, ask for their category (SC, ST, OBC, EBC, General), 
        family income, and current level of education.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};
