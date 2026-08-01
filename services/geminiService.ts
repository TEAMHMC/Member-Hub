
import { GoogleGenAI, Type } from "@google/genai";
import { Assessment, Referral } from '../types';

export const getResourceRecommendations = async (assessment: Assessment) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `Act as a clinical care coordinator for Health Matters Clinic. Based on these 8 Social Determinants of Health (SDOH) scores (0-3 scale, higher is more severe):
    - Housing: ${assessment.housing}
    - Food: ${assessment.food}
    - Transportation: ${assessment.transportation}
    - Healthcare Access: ${assessment.healthcare}
    - Mental Health: ${assessment.mentalHealth}
    - Employment/Education: ${assessment.employment}
    - Physical Safety: ${assessment.safety}
    - Community Connection: ${assessment.connection}

    Identify the top 3 critical needs. For each need, provide:
    1. A specific recommendation (referring to Table 11 Resource Directory types).
    2. A suggested recovery goal (SMART goal).
    3. An urgency level (Low, Medium, High).
    
    Format the response as a valid JSON array of objects.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              category: { type: Type.STRING },
              recommendation: { type: Type.STRING },
              suggestedGoal: { type: Type.STRING },
              urgency: { type: Type.STRING, description: 'Low, Medium, High' }
            },
            required: ["category", "recommendation", "suggestedGoal", "urgency"]
          }
        }
      }
    });

    const jsonStr = (response.text || "[]").trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini care coordination error:", error);
    return [];
  }
};

export const generateTaskSummary = async (referral: Referral) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `Case Analysis for ${referral.clientName}. 
    Referral to: ${referral.resourceName}. 
    Risk Level: ${referral.riskLevel}. 
    SLA Timeline: 72 hours.
    
    Provide a professional 2-3 sentence internal summary for a Case Manager detailing the priority of this handoff and any specific sensitivities based on the risk level.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return (response.text || "No intelligence summary available.").trim();
  } catch (error) {
    return "Intelligence engine temporarily offline.";
  }
};
