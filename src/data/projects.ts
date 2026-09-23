export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  challenge: string;
  architecture: string;
  results: string;
  tags: string[];
  sourceUrl?: string;
  demoUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Kroma: Distributed Log Aggregator & Telemetry Daemon",
    subtitle: "Lightweight, memory-efficient structured log ingestion engine.",
    category: "Distributed Systems",
    challenge:
      "High-traffic edge microservices were dropping critical error stacktraces during traffic spikes due to disk I/O contention and high daemon CPU overhead.",
    architecture:
      "Built a zero-dependency telemetry collector in Go with zero-allocation buffer pooling, write-ahead ring buffers, and compressed binary batch exports to remote S3-compatible endpoints.",
    results:
      "Reduced telemetry RAM footprint by 72% compared to standard FluentBit installations and comfortably ingested 45,000 logs/sec on a 2-core node.",
    tags: ["Go (Golang)", "Ring Buffers", "eBPF", "Prometheus", "gRPC"],
    sourceUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    id: "proj-2",
    title: "Nexus: Real-time Collaborative Code Editor",
    subtitle: "Conflict-free collaborative editing with sub-100ms sync.",
    category: "Real-time Systems",
    challenge:
      "Existing collaborative tools suffered from OT algorithm complexity causing merge conflicts on simultaneous multi-cursor edits across poor network conditions.",
    architecture:
      "Implemented CRDTs using Yjs with a custom WebSocket relay server in Bun, featuring selective syncing, presence awareness, and offline-first reconciliation.",
    results:
      "Achieved <80ms P99 sync latency with 200 concurrent users, zero merge conflicts in 3 months of production use.",
    tags: ["TypeScript", "CRDTs", "Yjs", "WebSocket", "Bun"],
    sourceUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    id: "proj-3",
    title: "Vanta: Zero-trust API Gateway",
    subtitle: "Policy-based access control with cryptographic identity verification.",
    category: "Security",
    challenge:
      "Internal microservices lacked granular authz boundaries, allowing lateral movement during pen-test simulations and hindering compliance audits.",
    architecture:
      "Designed a sidecar proxy model using mTLS with SPIFFE/SPIRE identity issuance, OPA policy engine integration, and real-time audit logging to ClickHouse.",
    results:
      "Eliminated implicit trust between 14 services, achieved SOC2 readiness for IAM controls, and reduced auth overhead by 40% vs. existing JWT middleware.",
    tags: ["Go", "OPA", "mTLS", "SPIFFE", "ClickHouse"],
    sourceUrl: "https://github.com",
  },
];
