"use client";

import { motion } from "framer-motion";
import { OrnateRule, SectionDivider, PullQuote, DropCapParagraph } from "@/components/newspaper/Typography";
import AdBlock from "@/components/newspaper/AdBlock";

export default function Page8Editorial({ onNavigate }: { onNavigate?: (page: number) => void }) {
  const blogs = [
    {
      id: "cloudflare-scaling",
      title: "Surviving vs. Scaling: The Cloudflare Difference",
      subhead: "An inside look at how the global network safeguards and accelerates modern web applications.",
      teaser: "If you're building anything for the internet — a startup, an app, a side project — Cloudflare is the difference between surviving and scaling. In this breakdown, we demystify the Cloudflare ecosystem: from speed and security to DNS, CDN, and edge computing, delivered in a style your infrastructure deserves.",
      quote: "Cloudflare is not just a shield; it is a global accelerator that decides whether your startup survives the slashdot effect or crashes under traffic surge.",
      url: "https://www.linkedin.com/posts/aryan-singh-jadaun_the-backbone-of-every-high-performing-website-activity-7396797423781761025-DBPr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
      date: "JULY 2026",
      desk: "INFRASTRUCTURE & SECURITY",
      body: [
        "At its core, web performance is a battle against geographical latency. When a user requests your site, the distance between their browser and your origin server dictates the speed of the user experience. Cloudflare's Anycast network resolves this bottleneck by caching and serving static assets from edge servers positioned in over 300 cities globally. This ensures that content is delivered at sub-millisecond speeds, reducing load times and resource utilization on your backend servers.",
        "However, scaling is not just about speed; it is about security. Without a Web Application Firewall (WAF) and robust DDoS mitigation, high-performance web systems are highly vulnerable to automated bot scans and malicious payloads. Incorporating edge rules, smart rate-limiting, and DNS-level shields safeguards production environments, allowing applications to experience viral traffic surges while retaining continuous uptime."
      ]
    },
    {
      id: "s3-storage-classes",
      title: "Store Smart, Store Cost-Effectively: AWS S3 Storage Classes Decoded",
      subhead: "Which AWS S3 class saves the most money without killing performance?",
      teaser: "S3 Standard, Glacier, Intelligent-Tiering, Deep Archive... too many options, right? Learn how to store smart (not just store more). Analyzing AWS S3 storage classes, lifecycle policies, and cost-performance tradeoffs with real-world workloads from Netflix, NASA, and enterprise systems.",
      quote: "Optimizing cloud storage costs is not about choosing the cheapest tier; it is about automating transitions based on retrieval latency thresholds.",
      url: "https://www.linkedin.com/posts/aryan-singh-jadaun_s3-storage-class-activity-7354623995154980866-0jOs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
      date: "JUNE 2026",
      desk: "CLOUD ECONOMICS & STORAGE",
      body: [
        "Cloud storage design often suffers from a set-and-forget mentality. Standard S3 objects are stored across multiple geographically separated availability zones, ensuring 99.999999999% durability but charging premium rates for frequent retrieval. For data assets with unpredictable access cycles, AWS Intelligent-Tiering automates cost optimization by monitoring access patterns and shifting inactive assets to infrequent-access tiers without retrieval fees or operational overhead.",
        "For compliance records, raw video archives, and historical logs, deep archival tiers like S3 Glacier Flexible and Glacier Deep Archive reduce storage expenses by up to 95%. The tradeoff resides in retrieval time, ranging from minutes for expedited queries to 12 hours for deep archive assets. Modern data lifecycles balance these classes, utilizing S3 lifecycle policy blueprints to transition data down the cost pyramid."
      ]
    },
    {
      id: "aws-case-studies",
      title: "AWS Case Studies: How Netflix, Capital One, & Moderna Scale",
      subhead: "Dissecting real-world cloud architectures of industry giants.",
      teaser: "AWS isn't just cloud computing — it's the new electricity. Netflix streams to millions of users, Capital One handles high-frequency transactions, and Moderna designs vaccines using high-performance cloud clusters. We dissect how top tech leaders leverage EC2 clusters, Lambda serverless functions, S3 storage, and RDS databases to achieve massive global scale.",
      quote: "Cloud architecture is not about computing power; it is about decoupling microservices to ensure horizontal elasticity under extreme demand.",
      url: "https://www.linkedin.com/posts/aryan-singh-jadaun_aws-case-studies-activity-7354616443830751233-VqA9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
      date: "JUNE 2026",
      desk: "SYSTEM ARCHITECTURE",
      body: [
        "Netflix's architectural transition from unified data centers to AWS microservices serves as the classic blueprint for cloud migration. By decoupling user authentication, catalog searching, and video streaming into hundreds of independent microservices, they eliminated single points of failure. Under dynamic user load, AWS Auto Scaling groups dynamically scale EC2 instances to meet spike surges while Amazon S3 reliably hosts static assets.",
        "Similarly, Moderna's research computational pipelines process genomic sequences on serverless AWS frameworks. By employing AWS Batch and serverless CPU/GPU nodes, they run intensive ML algorithms without paying for idle server time. AWS Lambda enables their scientists to initiate compute events instantly, reducing the drug discovery timeline from years to weeks."
      ]
    },
    {
      id: "kubernetes-devops",
      title: "Kubernetes: God Mode for DevOps Orchestration",
      subhead: "How K8s became the cloud's default operating system.",
      teaser: "Kubernetes is God Mode for DevOps. Airbnb scaled stays, Spotify orchestrated millions of music streams, and CERN processes petabytes of atomic collision data using K8s. This isn't just container management — this is self-healing, automated scaling, and infrastructure that runs anywhere.",
      quote: "Kubernetes is not just a container runner; it is a declaration of desired state that heals and scales your infrastructure autonomously.",
      url: "https://www.linkedin.com/posts/aryan-singh-jadaun_the-world-of-kubernetes-activity-7354595837903060993-bfJy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
      date: "MAY 2026",
      desk: "DEVOP & ORCHESTRATION",
      body: [
        "DevOps teams historically spent significant effort managing virtual machine failures. Kubernetes eliminates this burden by introducing container orchestration loops. You define the desired state — such as maintaining exactly five replicas of an API server — and the K8s control plane continuously monitors active pods. If a physical node fails, K8s immediately reschedules the missing pods on healthy nodes, ensuring zero downtime.",
        "This platform-agnostic layer abstracts away underlying cloud providers, allowing enterprises to run identical deployments across AWS, GCP, or bare-metal servers. By incorporating ingress controllers, secret managers, and horizontal pod autoscaling (HPA), K8s provides developers with a robust environment to scale applications from small side projects to enterprise scale."
      ]
    },
    {
      id: "docker-containers",
      title: "Why Companies Use Docker: Turning Chaos Into Containers",
      subhead: "How lightweight virtualization revolutionized build and deployment times.",
      teaser: "Docker turned development chaos into structured containers. Discover how PayPal dropped deployment times from 60 minutes to just 5, and how Spotify runs thousands of containerized microservices in symphony. Demystifying container isolation, layer caching, and lightweight runtimes.",
      quote: "Docker's genius is not isolation; it is portability — ensuring that what runs on a developer's laptop runs identically in production.",
      url: "https://www.linkedin.com/posts/aryan-singh-jadaun_why-companies-use-dockerpdf-activity-7354594825700069376-SETs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
      date: "MAY 2026",
      desk: "CONTAINERIZATION",
      body: [
        "Traditional virtualization required loading guest operating systems, consuming gigabytes of RAM and taking minutes to boot. Docker revolutionized this by using OS-level virtualization. Containers share the host kernel and isolate processes, allowing developers to run hundreds of containers on a single physical machine. This lightweight footprint reduces start times to milliseconds.",
        "By packaging the application code, system libraries, configuration files, and dependencies into a single immutable Docker image, teams solve the 'it works on my machine' bug. Layered caching in Dockerfiles ensures that only modified code lines are rebuilt, reducing CI/CD execution times from hours to minutes."
      ]
    },
    {
      id: "linux-bedrock",
      title: "Why Billion-Dollar Giants Run on Linux",
      subhead: "The open-source operating system that powers the internet.",
      teaser: "Linux is not just an operating system — it is the bedrock of the global internet. Learn why Google, Netflix, Facebook, and NASA trust Linux to power their critical nodes. Zero licensing costs, ultimate kernel-level customization, and bulletproof security make it the default for production.",
      quote: "Linux's dominance is the triumph of open-source collaboration, providing a high-performance kernel that powers everything from supercomputers to smartphones.",
      url: "https://www.linkedin.com/posts/aryan-singh-jadaun_blog-on-why-top-tech-companies-use-linux-activity-7354594281342316544-wnAr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
      date: "APRIL 2026",
      desk: "OPERATING SYSTEMS",
      body: [
        "In the enterprise server market, commercial licenses for proprietary systems represent massive cost overheads. Linux, being open source under the GPL, completely eliminates licensing fees. This allows companies to scale up thousands of nodes in cloud environments without financial friction. The open-source code enables developers to modify kernel configuration settings directly for optimized performance.",
        "Moreover, security is built into the core. Fine-grained permissions, SELinux policies, and containerization hooks (cgroups, namespaces) provide robust sandboxing. Supported by a global developer community, vulnerabilities are identified and patched rapidly, making Linux the gold standard for high-security environments like financial banking and aerospace engineering."
      ]
    }
  ];

  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="text-center mb-4">
          <span className="label-text text-xs text-gold font-bold tracking-widest">
            THE EDITORIAL DESK · TECH COLUMNS & INDUSTRY INSIGHTS
          </span>
          <OrnateRule thick />
          <motion.h2
            className="headline-xl ink-bleed my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Weekly Columns
            <br />
            & Editorial Opinions
          </motion.h2>
          <OrnateRule thick />
          <p className="label-text text-xs text-ink-faded mt-2">
            DEV OPINIONS · CLOUD SYSTEMS ARCHITECTURES · ARTIFICIAL INTELLIGENCE · AGENTIC WORKFLOWS
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-6">
          {/* Left Column: Featured Editorials */}
          <div className="col-span-12 md:col-span-8 space-y-8">
            {blogs.map((blog, index) => (
              <div key={blog.id} className="space-y-4">
                {index > 0 && <SectionDivider />}
                <div>
                  <p className="label-text text-xs text-gold font-bold mb-1">
                    {index === 0 ? "FEATURED WEEKLY COLUMN" : "TECH COMMENTARY & ANALYSIS"}
                  </p>
                  <h3 className="headline-lg ink-bleed text-ink leading-tight mb-2">
                    {blog.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs label-text text-ink-faded font-bold border-b border-ink border-opacity-20 pb-2 mb-3">
                    <span>WRITTEN BY: ARYAN SINGH JADAUN</span>
                    <span>DESK: {blog.desk}</span>
                    <span>DATE: {blog.date}</span>
                  </div>
                </div>

                <DropCapParagraph text={blog.teaser} />

                <PullQuote
                  quote={blog.quote}
                  attribution="Aryan Singh Jadaun, The Developer Daily"
                />

                <div className="body-text text-xs text-ink-faded leading-relaxed space-y-3 text-justify">
                  {blog.body.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-ink text-paper px-4 py-2 label-text text-xs font-bold hover:bg-brown transition-colors cursor-pointer"
                  >
                    READ FULL ARTICLE ON LINKEDIN ➔
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Weekly Archives & Ads */}
          <aside className="col-span-12 md:col-span-4 space-y-6">
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── UPCOMING TECH COLUMNS ──
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Building Autonomous Agents: LangGraph Decoded",
                    desc: "Decoding cyclic agentic workflows, memory persistence, and dynamic planning loops in state-of-the-art agent architectures.",
                    tag: "AGENTIC AI / LLMs",
                  },
                ].map((item, idx) => (
                  <div key={item.title} className="border-b border-ink border-opacity-20 pb-3 last:border-0 last:pb-0">
                    <span className="label-text text-[0.6rem] font-bold text-gold">{item.tag}</span>
                    <h4 className="headline-sm text-xs font-bold text-ink ink-bleed mt-0.5 mb-1 leading-snug">
                      {item.title}
                    </h4>
                    <p className="body-text text-[0.7rem] text-ink-faded leading-relaxed">
                      {item.desc}
                    </p>
                    <span className="label-text text-[0.55rem] font-bold text-ink-faded block mt-1.5 italic">
                      COMING SOON · VOLUME II
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <AdBlock
              title="Daily System Architecture Insights"
              body="Subscribe to Aryan's LinkedIn newsletter for insights into API performance, Python backend optimization, LangGraph agents, and Cloud deployments."
              cta="FOLLOW ARYAN ON LINKEDIN"
              onClick={() => window.open("https://www.linkedin.com/in/aryan-singh-jadaun", "_blank", "noopener,noreferrer")}
            />
          </aside>
        </div>
      </div>
    </article>
  );
}
