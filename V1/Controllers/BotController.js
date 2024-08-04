import Groq from "groq-sdk";
import dotenv from 'dotenv';
dotenv.config();

// Initialize Groq SDK with API key from environment variables
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Main function to demonstrate usage
export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

// Function to get chat completions from Groq
export async function getGroqChatCompletion(prompt) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama3-8b-8192", // Specify the model you want to use
  });
}


export async function getResponse(req, res) {
  const { prompt } = req.body;
  try {
    const response = await getGroqChatCompletion(prompt);
    res.json({ "response": response.choices[0]?.message?.content });
  } catch (error) {
    console.error("Error fetching response:", error);
    res.status(500).json({ error: "Failed to fetch response" });
  }
}
