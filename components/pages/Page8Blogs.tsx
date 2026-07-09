"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrnateRule, SectionDivider, PullQuote, DropCapParagraph } from "@/components/newspaper/Typography";
import AdBlock from "@/components/newspaper/AdBlock";

const blogs = [
  {
    id: "cloudflare-scaling",
    label: "INFRASTRUCTURE & SECURITY",
    headline: "Surviving vs. Scaling: The Cloudflare Difference",
    subhead: "An inside look at how the global network safeguards and accelerates modern web applications.",
    teaser: "If you're building anything for the internet — a startup, an app, a side project — Cloudflare is the difference between surviving and scaling. In this breakdown, we demystify the Cloudflare ecosystem: from speed and security to DNS, CDN, and edge computing, delivered in a style your infrastructure deserves.",
    quote: "Cloudflare is not just a shield; it is a global accelerator that decides whether your startup survives the slashdot effect or crashes under traffic surge.",
    url: "https://www.linkedin.com/posts/aryan-singh-jadaun_the-backbone-of-every-high-performing-website-activity-7396797423781761025-DBPr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
    date: "JULY 2026",
    emoji: "🌐",
    body: [
      "At its core, web performance is a battle against geographical latency. When a user requests your site, the distance between their browser and your origin server dictates the speed of the user experience. Cloudflare's Anycast network resolves this bottleneck by caching and serving static assets from edge servers positioned in over 300 cities globally. This ensures that content is delivered at sub-millisecond speeds, reducing load times and resource utilization on your backend servers.",
      "However, scaling is not just about speed; it is about security. Without a Web Application Firewall (WAF) and robust DDoS mitigation, high-performance web systems are highly vulnerable to automated bot scans and malicious payloads. Incorporating edge rules, smart rate-limiting, and DNS-level shields safeguards production environments, allowing applications to experience viral traffic surges while retaining continuous uptime."
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
    "kubernetes-devops":  ["#1a1a1a", "#c9a227"],
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
              <div className="body-text text-xs text-ink-faded leading-relaxed space-y-3 text-justify">
                {blog.body.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
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
            LINKEDIN ↗
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
