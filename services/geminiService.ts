
import { GoogleGenAI, Type } from "@google/genai";
import { RoadmapResponse } from "../types";

// Initialize the Google GenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a technical roadmap for an app idea using Gemini 3 Pro.
 * Uses responseSchema to ensure the output matches the RoadmapResponse interface precisely.
 */
export const generateAppRoadmap = async (idea: string): Promise<RoadmapResponse> => {
  // We use gemini-3-pro-preview for complex architectural reasoning tasks.
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `You are a world-class CTO and software architect at Hung Studio. 
    Analyze the following app concept and generate a comprehensive technical roadmap: "${idea}".
    The roadmap should be professional, feasible, and include innovative AI integrations.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          overview: {
            type: Type.STRING,
            description: "A high-level technical summary of the project."
          },
          techStack: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of recommended technologies and tools."
          },
          milestones: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                phase: { type: Type.STRING, description: "The title of the development phase." },
                details: { type: Type.STRING, description: "Key deliverables and tasks for this phase." }
              },
              required: ["phase", "details"]
            },
            description: "Sequential development milestones."
          },
          aiRecommendation: {
            type: Type.STRING,
            description: "A unique suggestion for leveraging AI capabilities."
          }
        },
        required: ["overview", "techStack", "milestones", "aiRecommendation"]
      },
    },
  });

  // Access text directly from response.text as per SDK guidelines.
  const text = response.text;
  if (!text) {
    throw new Error("No response received from the model.");
  }

  try {
    return JSON.parse(text.trim()) as RoadmapResponse;
  } catch (error) {
    console.error("Failed to parse roadmap JSON:", error);
    throw new Error("The AI generated an invalid roadmap format. Please try again.");
  }
};
