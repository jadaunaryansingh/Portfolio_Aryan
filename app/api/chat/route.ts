import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { messages, systemInstruction } = await request.json();
    
    // Read API key from server-side environment variables.
    // Note: By strictly using GEMINI_API_KEY (non-NEXT_PUBLIC), Next.js will
    // read it dynamically at runtime instead of inlining it during the build,
    // which prevents the API key from leaking into compiled server chunks.
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key is missing on the server. Please configure GEMINI_API_KEY in your Netlify environment variables." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: messages,
          systemInstruction: {
            parts: [{ text: systemInstruction }],
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API call failed:", errText);
      return NextResponse.json(
        { error: "Gemini API call failed", details: errText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error in chat route handler:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
