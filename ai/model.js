import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "../lib/prompts.js";
import { config } from "../config/env.js";

const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);

export const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
        responseMimeType: "application/json",
    },
});

export function startChat() {
    return model.startChat({
        history: [
            { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
            {
                role: "model",
                parts: [
                    {
                        text: "Understood. I will follow the specified JSON format for all responses.",
                    },
                ],
            },
        ],
    });
}
