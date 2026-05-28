import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Developer Daily — Aryan Singh Jadaun | AI Engineer & Backend Developer",
  description: "Premium vintage newspaper-style portfolio of Aryan Singh Jadaun — AI Engineer, Generative AI specialist, Backend Developer, and Startup Founder of CAB-I-NET.",
  keywords: ["AI Engineer", "Backend Developer", "Generative AI", "Portfolio", "Aryan Singh Jadaun"],
  openGraph: {
    title: "The Developer Daily",
    description: "Aryan Singh Builds AI Systems That Think",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
