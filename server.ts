import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini AI SDK
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// API Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", business: "Pest Free Services Durban" });
});

// Live Chat API route powered by Gemini AI
app.post("/api/chat", async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const systemInstruction = `You are Grant Arnold, founder and lead pest expert at Pest Free Services (trading as Grant's Pest Free Services) in Durban, South Africa.
Your company offers bio-friendly, non-fumigation pest control and handyman repairs across greater Durban (Umbilo, Morningside, North Beach, Umhlanga, Westville, Musgrave, etc.).
Key company highlights:
- Flagship specialty: Wood-borer and termite treatment using bio-friendly, non-fumigation methods. No tents, no mess, no disruption!
- Tested and proven in January 2012 at a block of flats on Baumann Avenue, North Beach, Durban. Results independently verified by UKZN-trained entomologists.
- 14+ years in business (since April 2011), served 650+ Durban households.
- Broad pest coverage: Wood-borer, cockroaches, ants, bed bugs, dust mites, mosquitoes, snake control, gecko control.
- Handyman services: Wooden window repair, wooden door repair, cupboard repair.
- Business Details: CC Reg B2011063958, VAT No 9365327171, Address: 24 Kensington Gardens, Umbilo, Durban, 4001.

Your tone should be warm, friendly, authoritative, reassuring, professional, and uniquely Durban-focused.
Answer user questions concisely, emphasize that your treatments do NOT require tenting or evacuating the home, offer instant quote estimations when asked, and encourage users to use the online booking system or call Grant directly for urgent cases (like snake or termite swarms).`;

    if (process.env.GEMINI_API_KEY) {
      try {
        const chatPrompt = conversationHistory && Array.isArray(conversationHistory)
          ? conversationHistory.map((h: any) => `${h.role === 'user' ? 'User' : 'Grant'}: ${h.text}`).join('\n') + `\nUser: ${message}`
          : message;

        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: chatPrompt,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });

        const reply = response.text || "Thank you for reaching out to Pest Free Services! How can I assist with your pest or borer concerns in Durban today?";
        return res.json({ reply });
      } catch (geminiError) {
        console.error("Gemini API Error:", geminiError);
      }
    }

    // Smart fallback if API key is not yet set or encounters an issue
    let fallbackReply = "Hello! I'm Grant Arnold from Pest Free Services in Durban. ";
    const msgLower = message.toLowerCase();

    if (msgLower.includes("borer") || msgLower.includes("wood")) {
      fallbackReply += "Our flagship bio-friendly wood-borer treatment penetrates deep into the timber without any toxic fumigation tents or household evacuation. It was verified by UKZN entomologists back in 2012! Would you like to book an inspection?";
    } else if (msgLower.includes("tent") || msgLower.includes("fumigat")) {
      fallbackReply += "Unlike traditional tent fumigation, our bio-based non-fumigation treatment requires NO tents, creates NO toxic mess, and allows you to stay comfortably in your home during treatment.";
    } else if (msgLower.includes("quote") || msgLower.includes("cost") || msgLower.includes("price")) {
      fallbackReply += "Our eco-friendly treatments are cost-effective and tailored to your property size. You can use our interactive Booking System right here on the site to get an instant quote and pick a date!";
    } else if (msgLower.includes("snake") || msgLower.includes("emergency")) {
      fallbackReply += "For urgent snake or gecko control in Durban, please keep a safe distance and call Grant directly at 082 555 7890 or book an emergency slot on our contact page.";
    } else {
      fallbackReply += "We cover wood-borer, cockroaches, ants, bed bugs, dust mites, mosquitoes, snakes, geckos, and wooden window/door repairs across Durban. How can I assist you today?";
    }

    return res.json({ reply: fallbackReply });
  } catch (err: any) {
    console.error("Server Error in /api/chat:", err);
    res.status(500).json({ error: "Failed to process chat message" });
  }
});

// Booking submission API endpoint
app.post("/api/bookings", (req, res) => {
  const booking = req.body;
  const reference = `PFS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  res.json({
    success: true,
    reference,
    message: "Booking received successfully! Grant will contact you shortly to confirm the appointment.",
    booking: { ...booking, reference },
  });
});

// Contact inquiry submission API endpoint
app.post("/api/contact", (req, res) => {
  res.json({
    success: true,
    message: "Thank you for contacting Pest Free Services Durban. Grant Arnold will respond to your message shortly.",
  });
});

// Vite Middleware setup for dev vs production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Pest Free Services app running on http://localhost:${PORT}`);
  });
}

startServer();
