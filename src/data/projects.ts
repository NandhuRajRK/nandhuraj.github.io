export type Project = {
  name: string;
  description: string;
  tags: string[];
  status: string;
  repoUrl: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Jarvis - Local-First Multimodal AI Desktop Assistant",
    description:
      "Local-first desktop AI assistant for local and cloud LLMs with screenshot/image context, streaming chat, provider switching, secure key storage, voice/camera interaction design, and privacy-first controls.",
    tags: ["Tauri", "Rust", "Svelte", "Ollama", "WebRTC", "SQLite", "Local AI", "Multimodal"],
    status: "BUILT / IN PROGRESS",
    repoUrl: "#"
  },
  {
    name: "Activation Steering in LLaDA: Localization, Generalization, and Behavioral Structure",
    description:
      "TUM thesis on activation steering and behavioral evaluation in masked diffusion language models, analyzing refusal, sycophancy, hallucination, transfer behavior, layer depth, and denoising-time effects. Reduced refusal from 68.8% to 3.1% on the main harmful-prompt benchmark and localized strongest steering effects near layer 19 and the first 40 denoising steps.",
    tags: ["Model Evaluation", "LLaDA", "Masked Diffusion LMs", "LLM Safety", "Behavioral Analysis"],
    status: "RESEARCH",
    repoUrl: "#"
  },
  {
    name: "StudyBridge - Agentic RAG Study Workspace",
    description:
      "Agentic RAG workspace for course-material ingestion, source-grounded tutor responses, summaries, flashcards, quizzes, and structured study artifacts. Implemented PDF/DOCX/PPTX/text ingestion, chunking, passage ranking, source-ID filtering, and multi-backend inference across local and cloud models.",
    tags: ["RAG", "LangChain", "Ollama", "OpenAI", "Anthropic", "Gemini", "Source-Grounded QA"],
    status: "BUILT",
    repoUrl: "#"
  },
  {
    name: "Upgrant - Local AI Workflow Platform",
    description:
      "Local-first AI productivity system with multi-provider model routing, Codex CLI/Ollama/OpenAI integration, structured outputs, runtime checks, and human approval gates for AI write actions.",
    tags: ["Electron", "React", "Ollama", "Codex CLI", "Structured Outputs", "Human-in-the-loop"],
    status: "BUILT",
    repoUrl: "#"
  },
  {
    name: "Crypt - AI Smart Contract Security Platform",
    description:
      "AI-assisted smart-contract security platform combining static analysis, exploit validation, LLM triage, structured outputs, monitoring, and audit-report generation. Built with FastAPI orchestration, Docker Compose services, Slither/Mythril/Foundry-style analysis workflows, multi-provider LLM analysis, and regression testing.",
    tags: ["FastAPI", "Docker", "LLM Orchestration", "Security", "Foundry", "Monitoring"],
    status: "BUILT",
    repoUrl: "#"
  }
];
