# The Developer Daily — Living Newspaper Portfolio

A cinematic, highly interactive 1930s-1940s newspaper-style Next.js developer portfolio for **Aryan Singh Jadaun** (AIML Engineer & Full-Stack Developer). 

Features 3D page-flip animations, vintage letterpress typography, high-contrast halftone styling, and a real-time Gemini AI Correspondent chatbot.

---

## 🛠️ Tech Stack & Requirements

### Core Frameworks & Libraries
- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & custom vintage filters (halftone, paper grain overlays)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & CSS Transitions
- **Integration**: Secure server-side route handler calling the Gemini API to prevent API key exposure

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.x` or higher

---

## 🔑 Environment Variables Setup

The chatbot uses a secure server-side API route handler. To configure the Gemini API key locally:

1. Create a `.env.local` file in the root directory:
   ```bash
   touch .env.local
   ```

2. Add your Gemini API key inside `.env.local`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

*Note: The `.gitignore` file is pre-configured to ignore all `.env` files, keeping your keys completely private.*

---

## 🚀 Installation & Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Local Dev Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

3. **Verify Production Build**:
   ```bash
   npm run build
   ```
   This generates an optimized static production bundle to ensure everything compiles flawlessly.

---

## 📰 Project Structure

- `app/`: Next.js App Router root layout and primary page.
- `components/pages/`: Individual pages of the 8-page newspaper sequence (About, Experience, Projects, Research, Certifications, Skills, Contact).
- `components/newspaper/`: Reusable typographic and newspaper elements (Masthead, AdBlocks, BreakingNewsTicker, VintageStamp).
- `components/ui/`: UI features, including `AIAssistant.tsx` (the chatbot widget) and `SoundToggle.tsx`.
- `public/`: Hosting static textures, Azure badge assets, and the GitHub redirect QR code.
