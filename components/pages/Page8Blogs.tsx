"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrnateRule, SectionDivider, PullQuote, DropCapParagraph } from "@/components/newspaper/Typography";
import AdBlock from "@/components/newspaper/AdBlock";

interface ContentBlock {
  type: "p" | "h2" | "h3" | "list" | "table";
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
}

const blogs = [
  {
    id: "cloudflare-scaling",
    label: "INFRASTRUCTURE & SECURITY",
    headline: "Cloudflare: The Internet's Quiet Superpower",
    subhead: "A deep, honest, no-fluff look at the company running a huge chunk of the web.",
    teaser: "If you're building anything for the internet — a startup, an app, a side project — Cloudflare is the difference between surviving and scaling. In this breakdown, we demystify the Cloudflare ecosystem: from speed and security to DNS, CDN, and edge computing, delivered in a style your infrastructure deserves.",
    quote: "Cloudflare is not just a shield; it is a global accelerator that decides whether your startup survives the slashdot effect or crashes under traffic surge.",
    url: "https://app.notion.com/p/Cloudflare-The-Internet-s-Quiet-Superpower-3986bf65d5588057b18cf5b78ec0e2ef?source=copy_link",
    date: "JULY 2026",
    emoji: "🌐",
    body: [
      {
        type: "p",
        text: "Let’s start with something most people don’t think about while they’re scrolling through a website: the internet, underneath the surface, is a genuinely hostile environment. Every second of every day, automated bots are scanning random domains looking for misconfigured servers. Attackers are probing login pages, testing for outdated software, and quietly cataloguing which sites might be worth targeting later. Somewhere, a DDoS attack is actively trying to flood a target with more traffic than it can physically handle. Somewhere else, a perfectly ordinary site is crashing simply because more people showed up than anyone expected, and an API that used to respond in milliseconds is suddenly choking under its own load."
      },
      {
        type: "p",
        text: "None of this is exotic or rare. It’s the baseline condition of running anything on the public internet. And in the middle of that constant low-grade chaos sits Cloudflare, doing a huge amount of quiet, unglamorous work to keep a meaningful share of the web online, fast, and free of drama."
      },
      {
        type: "p",
        text: "Describing Cloudflare in one sentence is tricky, because it doesn’t map neatly onto a single category. It behaves like a security guard standing at your website’s front door, a speed booster shortening the distance between your content and your visitors, a load balancer distributing traffic sensibly, and a traffic cop deciding, in real time, who gets through and who gets stopped. It protects your site from attacks, accelerates it for visitors anywhere in the world, hides your real server from anyone probing for it, issues free SSL certificates without you lifting a finger, speeds up your APIs, and keeps things running even while you’re asleep and nobody is watching the dashboard."
      },
      {
        type: "p",
        text: "And the genuinely notable part is that a large share of all this capability is available for free. That’s not a marketing trick - it’s a deliberate strategy that’s helped Cloudflare become the default choice for an enormous number of sites, from personal blogs to some of the largest platforms on the internet. But there’s real depth underneath that free tier, so let’s actually walk through how the whole thing works."
      },
      {
        type: "h2",
        text: "How Cloudflare Actually Works"
      },
      {
        type: "p",
        text: "Most people describe Cloudflare as “just a CDN,” which undersells it about as much as calling a Ferrari “just a car” or the Burj Khalifa “just a building.” A CDN is one piece of what Cloudflare does, not the whole picture."
      },
      {
        type: "p",
        text: "The foundational idea is straightforward: Cloudflare sits in front of your website as a reverse proxy. Instead of every visitor’s browser talking directly to your origin server, their request passes through Cloudflare’s network first. In diagram form, it looks like this:"
      },
      {
        type: "p",
        text: "User → Cloudflare’s Network → Your Origin Server"
      },
      {
        type: "p",
        text: "That middle step is where almost everything interesting happens. Here’s a closer look at what’s actually going on in that layer."
      },
      {
        type: "h3",
        text: "1. Filtering traffic before it reaches you"
      },
      {
        type: "p",
        text: "Every request that hits Cloudflare gets evaluated before it’s allowed anywhere near your server. Bots get identified and blocked or challenged. DDoS traffic gets absorbed at the network edge, far away from your infrastructure. Known hacking patterns get recognized and stopped. Meanwhile, legitimate visitors pass through so quickly they never notice any of this happened. It’s a bouncer that’s fast enough to be functionally invisible to everyone who actually belongs inside."
      },
      {
        type: "h3",
        text: "2. Caching content across the globe"
      },
      {
        type: "p",
        text: "Cloudflare operates data centers in more than 300 locations worldwide. Without a CDN, a visitor browsing your site from Mumbai while your server sits in Virginia feels every millisecond of that physical distance - the request has to travel there, and the response has to travel all the way back. With Cloudflare, that same visitor gets served from a data center much closer to them, often in the same city or region, which is the entire point of a content delivery network. The physics of distance don’t change, but the practical experience does, dramatically."
      },
      {
        type: "h3",
        text: "3. Hiding your real server from the world"
      },
      {
        type: "p",
        text: "Because traffic routes through Cloudflare rather than hitting your server directly, your actual origin IP address stays hidden from casual inspection. Attackers scanning the internet for vulnerable servers simply can’t find yours to attack directly, because as far as the public internet is concerned, Cloudflare’s network is your website. Your real infrastructure sits one layer removed, mostly out of reach."
      },
      {
        type: "h3",
        text: "4. Finding the fastest possible route"
      },
      {
        type: "p",
        text: "A feature called Argo Smart Routing continuously analyzes network conditions across Cloudflare’s backbone and picks the fastest available path for your traffic, similar in spirit to how traffic-aware navigation apps route around congestion, except this is happening to data packets instead of cars. The practical result is lower latency, fewer network hops, and a noticeably faster time-to-first-byte for visitors."
      },
      {
        type: "h3",
        text: "5. Running your actual logic at the edge"
      },
      {
        type: "p",
        text: "This is arguably the most interesting layer, and the one that turns Cloudflare from “a fast CDN” into a genuine application platform. Through Workers, KV, R2, D1, and Durable Objects, developers can deploy real backend logic that runs directly on Cloudflare’s network, physically close to whoever’s using it. There’s no server to provision, no specific region to choose ahead of time, no ongoing DevOps overhead, and none of the delay that comes from routing every request back to one central data center. The code simply runs near the user, wherever that happens to be."
      },
      {
        type: "p",
        text: "It’s a big part of why so many modern startups build entire products on top of Cloudflare rather than provisioning traditional cloud servers. In summary: for a large slice of the web, Cloudflare isn’t simply standing in front of it anymore. It has become part of how the web actually functions."
      },
      {
        type: "h2",
        text: "Cloudflare’s Features, Explained Properly"
      },
      {
        type: "p",
        text: "Cloudflare’s marketing page lists dozens of products, and it’s easy to skim past most of them without understanding what they actually do. Here’s a genuinely useful walkthrough of the major ones."
      },
      {
        type: "h3",
        text: "Content Delivery Network (CDN)"
      },
      {
        type: "p",
        text: "Your site’s static assets — images, HTML, CSS, JavaScript, video files — get cached across Cloudflare’s global network instead of being served fresh from your origin server every single time. The practical benefits stack up quickly: faster load times for visitors, dramatically less bandwidth consumed on your own server, lower latency worldwide, a modest but real SEO benefit from having a faster site, and generally happier users who don’t sit around waiting for a page to render. In effect, your website starts behaving like a global celebrity - reachable quickly no matter where the visitor happens to be standing."
      },
      {
        type: "h3",
        text: "DDoS Protection"
      },
      {
        type: "p",
        text: "Picture millions of automated requests trying to knock your site offline simultaneously. Cloudflare’s response is, roughly, “cute attempt.” The network absorbs attacks across Layer 3 (network), Layer 4 (transport), and Layer 7 (application, meaning HTTP-based) attacks, along with coordinated bot floods and unusual traffic anomalies that don’t fit normal patterns. Large enterprises genuinely trust Cloudflare to keep them online during these events, which is a meaningful signal about how effective the protection actually is once you’re operating at real scale."
      },
      {
        type: "h3",
        text: "Web Application Firewall (WAF)"
      },
      {
        type: "p",
        text: "Cloudflare’s WAF actively watches for the usual categories of attack: SQL injection attempts, cross-site scripting, cross-site request forgery, remote code execution attempts, path traversal, and general API abuse. The clever part of the design is that detection signatures update globally - when one site on Cloudflare’s network gets hit with a new attack technique, every other site on the network becomes protected against that same technique almost immediately afterward. It functions a bit like herd immunity, except for websites instead of populations."
      },
      {
        type: "h3",
        text: "DNS - Genuinely Fast, Genuinely Reliable"
      },
      {
        type: "p",
        text: "Cloudflare’s 1.1.1.1 resolver was built specifically for speed and privacy, and it caches responses aggressively to cut down lookup delays. For an ordinary business, that combination translates into DNS resolution that essentially never becomes the bottleneck or the cause of downtime, which is a much bigger deal than it sounds like on paper."
      },
      {
        type: "h3",
        text: "Free SSL and TLS Certificates"
      },
      {
        type: "p",
        text: "There’s no certificate to purchase, no manual installation process, and no renewal deadline to track on a calendar somewhere. Cloudflare issues and renews HTTPS certificates automatically in the background. The result is that your site looks - and genuinely is - more secure and more professional from the moment it goes live, without any certificate-management busywork on your end."
      },
      {
        type: "h3",
        text: "Bot Management"
      },
      {
        type: "p",
        text: "Cloudflare doesn’t try to block every bot indiscriminately, only the harmful ones. It relies on fingerprinting techniques and behavioral, machine-learning-based detection to tell the difference. Think of it as a guest list at a club door: Googlebot gets waved straight through because it’s clearly legitimate and useful, malware bots get turned away entirely, and generic scrapers get rate-limited rather than banned outright, which keeps things fair without being unnecessarily aggressive."
      },
      {
        type: "h3",
        text: "Cloudflare Workers - Serverless Compute at the Edge"
      },
      {
        type: "p",
        text: "This is arguably where Cloudflare stops being “a CDN company” and starts being a genuine application platform. Workers let developers run APIs, authentication logic, on-the-fly image resizing, complete app backends, routing rules, middleware, and webhook handlers, all executing at the edge rather than in one central data center. Practically, that means no meaningful cold starts, very fast execution, pay-per-request pricing that scales naturally with usage, deployments that go live in seconds, and zero traditional servers to patch, monitor, or scale manually. Combine Workers with KV and D1 for storage, and you effectively have a complete full-stack application with no conventional server anywhere in the architecture."
      },
      {
        type: "h3",
        text: "Cloudflare Pages - Frontend Hosting"
      },
      {
        type: "p",
        text: "Deploy a Next.js app, a React project, a Svelte site, plain static HTML, or any other JAMstack setup, and Cloudflare Pages runs it globally, almost instantly, with automatic deployments tied directly to your git repository."
      },
      {
        type: "h3",
        text: "Cloudflare R2 Storage"
      },
      {
        type: "p",
        text: "R2 is a direct competitor to Amazon S3, built around one particularly significant difference: there are no egress fees. That single change in the pricing model has been enough, on its own, to pull a meaningful number of developers and companies away from traditional cloud storage providers, since egress charges are often the hidden cost that quietly inflates a cloud storage bill over time."
      },
      {
        type: "h3",
        text: "Zero Trust Security"
      },
      {
        type: "p",
        text: "Cloudflare Access replaces traditional VPNs and legacy corporate firewalls with identity-based access to internal applications. Instead of trusting anyone who happens to be connected to a particular network, the system verifies who someone actually is before granting access, which is a meaningfully more secure model for distributed and remote teams."
      },
      {
        type: "p",
        text: "And even after covering all of that, it’s still not close to the entirety of what Cloudflare offers - the platform genuinely keeps expanding into new territory every year."
      },
      {
        type: "h2",
        text: "Why Cloudflare Is Actually Important"
      },
      {
        type: "p",
        text: "It’s worth stepping back and asking why any of this matters beyond the technical details. The internet today is bigger, faster, more global, and considerably more hostile than it was even a few years ago. A single server, however carefully configured, simply can’t keep up with that reality on its own anymore. Here’s the practical case for why infrastructure like Cloudflare has become close to essential."
      },
      {
        type: "h3",
        text: "Security is no longer optional"
      },
      {
        type: "p",
        text: "Modern attacks aren’t casual mischief from bored hackers - they’re organized, automated, increasingly AI-assisted, and built specifically to scale. Cloudflare absorbs the overwhelming majority of this activity without requiring active effort."
      },
      {
        type: "h3",
        text: "Performance translates directly into revenue"
      },
      {
        type: "p",
        text: "Fast websites rank better in search results, convert visitors into customers more reliably, and see lower bounce rates."
      },
      {
        type: "h3",
        text: "Reliability protects brand trust"
      },
      {
        type: "p",
        text: "A website going down costs the trust of whoever happened to hit that error page. Cloudflare helps prevent server overload, absorbs traffic spikes, and keeps latency under control."
      },
      {
        type: "h3",
        text: "It genuinely saves money"
      },
      {
        type: "p",
        text: "Less bandwidth consumed, less compute required, lower storage costs, and a lighter DevOps workload add up over time."
      },
      {
        type: "h3",
        text: "It makes a website genuinely global"
      },
      {
        type: "p",
        text: "A visitor in Delhi, New York, Berlin, Dubai, or Singapore ends up getting roughly the same speed and the same level of protection."
      },
      {
        type: "h2",
        text: "Real-World Use Cases, Industry by Industry"
      },
      {
        type: "h3",
        text: "E-commerce"
      },
      {
        type: "p",
        text: "Online stores need fast page loads, secure checkout flows, and APIs that don’t buckle. Cloudflare’s CDN, bot filtering, and fraud protection cover exactly that combination of needs."
      },
      {
        type: "h3",
        text: "EdTech"
      },
      {
        type: "p",
        text: "Education platforms see brutal, predictable traffic spikes around exam periods and submission windows. Cloudflare scales instantly to absorb those surges."
      },
      {
        type: "h3",
        text: "FinTech"
      },
      {
        type: "p",
        text: "Financial platforms operate under some of the strictest security expectations. Cloudflare offers a strict firewall, Zero Trust controls, API security, and DDoS filtering."
      },
      {
        type: "h3",
        text: "SaaS Products"
      },
      {
        type: "p",
        text: "Every SaaS company needs a fast dashboard, secure auth, quick API response times, and dependable uptime. Workers, KV, R2, and Pages cover the full stack."
      },
      {
        type: "h3",
        text: "Streaming and Media"
      },
      {
        type: "p",
        text: "Cloudflare’s CDN delivers video content faster across regions, which translates directly into less buffering and smoother playback."
      },
      {
        type: "h2",
        text: "Big Companies, and Why They Actually Trust Cloudflare"
      },
      {
        type: "list",
        items: [
          "Shopify: Handles billions of e-commerce requests across its merchant network.",
          "Discord: A massive real-time messaging platform serving millions of concurrent users.",
          "Udemy: Video-heavy e-learning delivered at global scale.",
          "GitLab: Developer-heavy workloads with demanding uptime expectations.",
          "DoorDash: Logistics coordination and real-time API traffic.",
          "OpenAI / ChatGPT: Large scale AI model inference traffic infrastructure.",
          "Uber: Relies on Cloudflare for performance-focused routing."
        ]
      },
      {
        type: "h2",
        text: "Cloudflare Pricing, Broken Down Honestly"
      },
      {
        type: "h3",
        text: "Free Plan"
      },
      {
        type: "p",
        text: "Includes the CDN, DDoS protection, DNS, SSL, a generous Workers allowance (100,000 requests per day), and basic firewall rules."
      },
      {
        type: "h3",
        text: "Pro - roughly $25/month"
      },
      {
        type: "p",
        text: "Adds the full WAF, image optimization, and advanced caching controls."
      },
      {
        type: "h3",
        text: "Business - roughly $250/month"
      },
      {
        type: "p",
        text: "Brings enterprise features: 24/7 support, advanced routing, and custom SSL configurations."
      },
      {
        type: "h3",
        text: "Enterprise - custom pricing"
      },
      {
        type: "p",
        text: "Includes guaranteed performance, formal SLAs, custom routing, and private network access."
      },
      {
        type: "h2",
        text: "Cloudflare vs. the Competition, at a Glance"
      },
      {
        type: "table",
        headers: ["Category", "Alternative", "Where it stands out"],
        rows: [
          ["CDN", "Akamai", "Oldest, most enterprise-focused, priced accordingly"],
          ["CDN", "Fastly", "Very fast for real-time content delivery"],
          ["CDN", "Amazon CloudFront", "Makes sense if you’re already deep in AWS"],
          ["Security", "Imperva", "Strong dedicated enterprise WAF"],
          ["Security", "F5", "Classic, established load balancing"],
          ["Serverless", "Vercel", "Excellent frontend developer experience"],
          ["Serverless", "Netlify", "Very easy, dev-friendly deployments"],
          ["Serverless", "AWS Lambda@Edge", "Powerful, but comes with real complexity"],
          ["Serverless", "Deno Deploy", "A newer, modern alternative"],
          ["DNS", "Google DNS / Route 53", "Reliable, but not bundled with the rest"]
        ]
      },
      {
        type: "h2",
        text: "Why Developers Are Genuinely Fond of Cloudflare"
      },
      {
        type: "list",
        items: [
          "No servers to provision or patch: Less infrastructure management overhead.",
          "No SSL certificate renewal headaches: Handled automatically in the background.",
          "Reduced exposure to DDoS attacks: Out of the box peace of mind.",
          "Fast API endpoints by default: Global performance without extra tuning.",
          "Workers are enjoyable to build: Modern developer edge workflow.",
          "Pages deployments go live in seconds: Rapid git-integrated CI/CD.",
          "R2 keeps storage costs predictable: No egress fees.",
          "Zero Trust handles secure access: Replace traditional VPNs."
        ]
      },
      {
        type: "h2",
        text: "A Quick Look at Getting Started"
      },
      {
        type: "p",
        text: "For anyone curious about trying it, the path is simple. Sign up, add your domain, and Cloudflare scans your existing DNS records automatically. Update your domain’s nameservers at your registrar to point at Cloudflare, which is the step that actually routes traffic through its network. Set your SSL/TLS mode to Full or Full (Strict) for secure encryption, and you are ready."
      },
      {
        type: "h2",
        text: "Final Verdict: Why You Should Consider Cloudflare"
      },
      {
        type: "p",
        text: "Here’s the wrap-up. If you run a website, a business, a SaaS product, or a set of APIs, Cloudflare is one of the more sensible infrastructure decisions available today, regardless of team size or budget."
      }
    ]
  },
  {
    id: "s3-storage-classes",
    label: "CLOUD ECONOMICS & STORAGE",
    headline: "Store Smart, Store Cost-Effectively: AWS S3 Storage Classes Decoded",
    subhead: "Which AWS S3 class saves the most money without killing performance?",
    teaser: "S3 Standard, Glacier, Intelligent-Tiering, Deep Archive... too many options, right? Learn how to store smart (not just store more). Analyzing AWS S3 storage classes, lifecycle policies, and cost-performance tradeoffs with real-world workloads from Netflix, NASA, and enterprise systems.",
    quote: "Optimizing cloud storage costs is not about choosing the cheapest tier; it is about automating transitions based on retrieval latency thresholds.",
    url: "https://www.linkedin.com/posts/aryan-singh-jadaun_s3-storage-class-activity-7354623995154980866-0jOs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
    date: "JUNE 2026",
    emoji: "📦",
    body: [
      "Cloud storage design often suffers from a set-and-forget mentality. Standard S3 objects are stored across multiple geographically separated availability zones, ensuring 99.999999999% durability but charging premium rates for frequent retrieval. For data assets with unpredictable access cycles, AWS Intelligent-Tiering automates cost optimization by monitoring access patterns and shifting inactive assets to infrequent-access tiers without retrieval fees or operational overhead.",
      "For compliance records, raw video archives, and historical logs, deep archival tiers like S3 Glacier Flexible and Glacier Deep Archive reduce storage expenses by up to 95%. The tradeoff resides in retrieval time, ranging from minutes for expedited queries to 12 hours for deep archive assets. Modern data lifecycles balance these classes, utilizing S3 lifecycle policy blueprints to transition data down the cost pyramid."
    ]
  },
  {
    id: "aws-case-studies",
    label: "SYSTEM ARCHITECTURE",
    headline: "AWS Case Studies: How Netflix, Capital One, & Moderna Scale",
    subhead: "Dissecting real-world cloud architectures of industry giants.",
    teaser: "AWS isn't just cloud computing — it's the new electricity. Netflix streams to millions of users, Capital One handles high-frequency transactions, and Moderna designs vaccines using high-performance cloud clusters. We dissect how top tech leaders leverage EC2 clusters, Lambda serverless functions, S3 storage, and RDS databases to achieve massive global scale.",
    quote: "Cloud architecture is not about computing power; it is about decoupling microservices to ensure horizontal elasticity under extreme demand.",
    url: "https://www.linkedin.com/posts/aryan-singh-jadaun_aws-case-studies-activity-7354616443830751233-VqA9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
    date: "JUNE 2026",
    emoji: "🏗️",
    body: [
      "Netflix's architectural transition from unified data centers to AWS microservices serves as the classic blueprint for cloud migration. By decoupling user authentication, catalog searching, and video streaming into hundreds of independent microservices, they eliminated single points of failure. Under dynamic user load, AWS Auto Scaling groups dynamically scale EC2 instances to meet spike surges while Amazon S3 reliably hosts static assets.",
      "Similarly, Moderna's research computational pipelines process genomic sequences on serverless AWS frameworks. By employing AWS Batch and serverless CPU/GPU nodes, they run intensive ML algorithms without paying for idle server time. AWS Lambda enables their scientists to initiate compute events instantly, reducing the drug discovery timeline from years to weeks."
    ]
  },
  {
    id: "kubernetes-devops",
    label: "DEVOP & ORCHESTRATION",
    headline: "Kubernetes: God Mode for DevOps Orchestration",
    subhead: "How K8s became the cloud's default operating system.",
    teaser: "Kubernetes is God Mode for DevOps. Airbnb scaled stays, Spotify orchestrated millions of music streams, and CERN processes petabytes of atomic collision data using K8s. This isn't just container management — this is self-healing, automated scaling, and infrastructure that runs anywhere.",
    quote: "Kubernetes is not just a container runner; it is a declaration of desired state that heals and scales your infrastructure autonomously.",
    url: "https://www.linkedin.com/posts/aryan-singh-jadaun_the-world-of-kubernetes-activity-7354595837903060993-bfJy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
    date: "MAY 2026",
    emoji: "☸️",
    body: [
      "DevOps teams historically spent significant effort managing virtual machine failures. Kubernetes eliminates this burden by introducing container orchestration loops. You define the desired state — such as maintaining exactly five replicas of an API server — and the K8s control plane continuously monitors active pods. If a physical node fails, K8s immediately reschedules the missing pods on healthy nodes, ensuring zero downtime.",
      "This platform-agnostic layer abstracts away underlying cloud providers, allowing enterprises to run identical deployments across AWS, GCP, or bare-metal servers. By incorporating ingress controllers, secret managers, and horizontal pod autoscaling (HPA), K8s provides developers with a robust environment to scale applications from small side projects to enterprise scale."
    ]
  },
  {
    id: "docker-containers",
    label: "CONTAINERIZATION",
    headline: "Why Companies Use Docker: Turning Chaos Into Containers",
    subhead: "How lightweight virtualization revolutionized build and deployment times.",
    teaser: "Docker turned development chaos into structured containers. Discover how PayPal dropped deployment times from 60 minutes to just 5, and how Spotify runs thousands of containerized microservices in symphony. Demystifying container isolation, layer caching, and lightweight runtimes.",
    quote: "Docker's genius is not isolation; it is portability — ensuring that what runs on a developer's laptop runs identically in production.",
    url: "https://www.linkedin.com/posts/aryan-singh-jadaun_why-companies-use-dockerpdf-activity-7354594825700069376-SETs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
    date: "MAY 2026",
    emoji: "🐳",
    body: [
      "Traditional virtualization required loading guest operating systems, consuming gigabytes of RAM and taking minutes to boot. Docker revolutionized this by using OS-level virtualization. Containers share the host kernel and isolate processes, allowing developers to run hundreds of containers on a single physical machine. This lightweight footprint reduces start times to milliseconds.",
      "By packaging the application code, system libraries, configuration files, and dependencies into a single immutable Docker image, teams solve the 'it works on my machine' bug. Layered caching in Dockerfiles ensures that only modified code lines are rebuilt, reducing CI/CD execution times from hours to minutes."
    ]
  },
  {
    id: "linux-bedrock",
    label: "OPERATING SYSTEMS",
    headline: "Why Billion-Dollar Giants Run on Linux",
    subhead: "The open-source operating system that powers the internet.",
    teaser: "Linux is not just an operating system — it is the bedrock of the global internet. Learn why Google, Netflix, Facebook, and NASA trust Linux to power their critical nodes. Zero licensing costs, ultimate kernel-level customization, and bulletproof security make it the default for production.",
    quote: "Linux's dominance is the triumph of open-source collaboration, providing a high-performance kernel that powers everything from supercomputers to smartphones.",
    url: "https://www.linkedin.com/posts/aryan-singh-jadaun_blog-on-why-top-tech-companies-use-linux-activity-7354594281342316544-wnAr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
    date: "APRIL 2026",
    emoji: "🐧",
    body: [
      "In the enterprise server market, commercial licenses for proprietary systems represent massive cost overheads. Linux, being open source under the GPL, completely eliminates licensing fees. This allows companies to scale up thousands of nodes in cloud environments without financial friction. The open-source code enables developers to modify kernel configuration settings directly for optimized performance.",
      "Moreover, security is built into the core. Fine-grained permissions, SELinux policies, and containerization hooks (cgroups, namespaces) provide robust sandboxing. Supported by a global developer community, vulnerabilities are identified and patched rapidly, making Linux the gold standard for high-security environments like financial banking and aerospace engineering."
    ]
  }
];

function BlogThumbnail({ id, emoji }: { id: string; emoji: string }) {
  const palettes: Record<string, [string, string]> = {
    "cloudflare-scaling": ["#1a2a3a", "#e8c04a"],
    "s3-storage-classes": ["#2a1a1a", "#e8d5b0"],
    "aws-case-studies":   ["#1a3a2a", "#c9a227"],
    "kubernetes-devops":  ["#1a1a2a", "#c9a227"],
    "docker-containers":  ["#2a2a3a", "#e8d5b0"],
    "linux-bedrock":      ["#2a1a2a", "#e8c04a"],
  };
  const [bg, accent] = palettes[id] || ["#1a1a1a", "#c9a227"];

  return (
    <div
      className="relative overflow-hidden border-b border-ink h-32"
      style={{ background: bg }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`h-blog-${id}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2" fill={accent} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#h-blog-${id})`} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
        <span style={{ fontSize: "2.5rem" }}>{emoji}</span>
        <span style={{ fontFamily: "'Abril Fatface', cursive", color: accent, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          {id.replace(/-/g, " ")}
        </span>
      </div>
    </div>
  );
}

function BlogCard({ blog }: { blog: typeof blogs[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="article-card border-2 border-ink overflow-hidden cursor-pointer hover:bg-cream hover:bg-opacity-35 transition-all duration-300 col-span-12 md:col-span-6"
      onClick={() => window.open(blog.url, "_blank", "noopener,noreferrer")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
    >
      <BlogThumbnail id={blog.id} emoji={blog.emoji} />

      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <p className="label-text text-xs text-gold font-bold">{blog.label}</p>
          <p className="label-text text-[0.65rem] text-ink-faded font-bold">{blog.date}</p>
        </div>
        <h3 className="headline-md text-ink ink-bleed mb-1 leading-snug">{blog.headline}</h3>
        <p className="font-playfair italic text-ink-faded text-sm mb-2">{blog.subhead}</p>

        <div className="h-px bg-ink opacity-20 mb-2" />
        <DropCapParagraph text={blog.teaser} />

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 border-t border-ink border-opacity-20 pt-4 space-y-4"
            >
              <PullQuote
                quote={blog.quote}
                attribution="Aryan Singh Jadaun, The Developer Daily"
              />
              <div className="body-text text-xs text-ink-faded leading-relaxed space-y-4 text-justify">
                {Array.isArray(blog.body) && typeof blog.body[0] === "string" ? (
                  (blog.body as string[]).map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))
                ) : (
                  (blog.body as ContentBlock[]).map((block, bIdx) => {
                    switch (block.type) {
                      case "p":
                        return <p key={bIdx} className="mb-3 text-justify leading-relaxed">{block.text}</p>;
                      case "h2":
                        return <h4 key={bIdx} className="headline-sm text-[0.75rem] font-bold text-ink ink-bleed mt-6 mb-3 border-b border-ink border-opacity-25 pb-1">{block.text}</h4>;
                      case "h3":
                        return <h5 key={bIdx} className="font-playfair font-bold text-xs text-ink mt-4 mb-2">{block.text}</h5>;
                      case "list":
                        return (
                          <ul key={bIdx} className="list-disc pl-5 my-3 space-y-1.5">
                            {block.items?.map((item, idx) => (
                              <li key={idx} className="body-text text-[0.7rem] text-ink-faded leading-relaxed">{item}</li>
                            ))}
                          </ul>
                        );
                      case "table":
                        return (
                          <div key={bIdx} className="overflow-x-auto my-4 border border-ink border-opacity-20 rounded-sm">
                            <table className="min-w-full text-[0.65rem] text-ink-faded table-auto">
                              <thead>
                                <tr className="border-b border-ink border-opacity-25 bg-cream bg-opacity-40">
                                  {block.headers?.map((h, idx) => (
                                    <th key={idx} className="p-2 text-left font-bold border-r border-ink border-opacity-10 last:border-0">{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {block.rows?.map((row, rIdx) => (
                                  <tr key={rIdx} className="border-b border-ink border-opacity-10 last:border-0 hover:bg-cream hover:bg-opacity-20">
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className="p-2 border-r border-ink border-opacity-10 last:border-0">{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      default:
                        return null;
                    }
                  })
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-3 mt-4 border-t border-ink border-opacity-10 pt-3">
          <button
            id={`blog-more-${blog.id}`}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="label-text text-xs font-bold text-gold border-b border-gold hover:text-ink hover:border-ink transition-colors cursor-pointer relative z-10"
          >
            {expanded ? "CLOSE COLUMN ↑" : "READ COLUMN →"}
          </button>
          <span
            className="label-text text-xs font-bold border border-ink px-2 py-0.5 hover:bg-ink hover:text-paper transition-colors"
          >
            {blog.url.includes("notion.com") || blog.url.includes("notion.so") ? "NOTION ↗" : "LINKEDIN ↗"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Page8Blogs({ onNavigate }: { onNavigate?: (page: number) => void }) {
  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="label-text text-xs text-gold font-bold tracking-widest">
            THE BLOG DESK · TECH COLUMNS & INDUSTRY INSIGHTS
          </span>
          <OrnateRule thick />
          <motion.h2
            className="headline-xl ink-bleed my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Weekly Columns
            <br />
            & Tech Blogs
          </motion.h2>
          <OrnateRule thick />
          <p className="label-text text-xs text-ink-faded mt-2">
            DEV OPINIONS · CLOUD SYSTEMS ARCHITECTURES · ARTIFICIAL INTELLIGENCE · AGENTIC WORKFLOWS
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-4 mt-6">
          {/* Section: Infrastructure & Cloud */}
          <div className="col-span-12">
            <SectionDivider label="WEEKLY TECH COLUMNS" />
          </div>
          <BlogCard blog={blogs[0]} />
          <BlogCard blog={blogs[1]} />
          <BlogCard blog={blogs[2]} />
          <BlogCard blog={blogs[3]} />

          {/* Advert & Upcoming Columns Row */}
          <div className="col-span-12">
            <SectionDivider label="ADVERTISEMENT & DAILY ARCHIVES" />
          </div>

          {/* Ad block on left */}
          <div className="col-span-12 md:col-span-8">
            <AdBlock
              title="Daily System Architecture Insights"
              body="Subscribe to Aryan's LinkedIn newsletter for insights into API performance, Python backend optimization, LangGraph agents, and Cloud deployments."
              cta="FOLLOW ARYAN ON LINKEDIN ➔"
              onClick={() => window.open("https://www.linkedin.com/in/aryan-singh-jadaun", "_blank", "noopener,noreferrer")}
            />
          </div>

          {/* Upcoming columns box on right */}
          <div className="col-span-12 md:col-span-4 border-2 border-ink p-4 bg-cream bg-opacity-40 flex flex-col justify-center">
            <span className="label-text text-[0.6rem] font-bold text-gold tracking-widest mb-2 block">
              ── UPCOMING TECH COLUMNS ──
            </span>
            <span className="label-text text-[0.65rem] font-bold text-gold">AGENTIC AI / LLMs</span>
            <h4 className="headline-sm text-xs font-bold text-ink ink-bleed mt-1 mb-1 leading-snug">
              Building Autonomous Agents: LangGraph Decoded
            </h4>
            <p className="body-text text-[0.7rem] text-ink-faded leading-relaxed">
              Decoding cyclic agentic workflows, memory persistence, and dynamic planning loops in state-of-the-art agent architectures.
            </p>
            <span className="label-text text-[0.55rem] font-bold text-ink-faded block mt-2 italic">
              COMING SOON · VOLUME II
            </span>
          </div>

          {/* Section: Operating Systems */}
          <div className="col-span-12">
            <SectionDivider label="CONTAINERIZATION & OPERATING SYSTEMS" />
          </div>
          <BlogCard blog={blogs[4]} />
          <BlogCard blog={blogs[5]} />
        </div>
      </div>
    </article>
  );
}
