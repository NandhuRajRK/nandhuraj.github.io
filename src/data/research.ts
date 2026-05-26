export type ResearchExperiment = {
  title: string;
  description: string;
  tags: string[];
};

export const researchExperiments: ResearchExperiment[] = [
  {
    title: "XAI Fraud Detection Pipeline",
    description:
      "Reproducible XAI pipeline over SEC EDGAR disclosures using FinBERT, cross-validation, holdout evaluation, SHAP, LIME, attention, permutation, and counterfactual explanations. Achieved 80.0% accuracy, 93.33% recall, and 82.35% F1 on a 30-sample holdout set while preserving interpretability through explanation reports.",
    tags: ["FinBERT", "XAI", "SHAP", "LIME", "Model Evaluation", "Financial NLP"]
  },
  {
    title: "Denoising-Step Efficiency in Masked Diffusion LMs",
    description:
      "Research experiment studying how behavioral steering effects and output quality vary across denoising steps in masked diffusion language models. The LLaDA experiments showed that strongest refusal-steering effects were concentrated near layer 19 and the first 40 denoising steps, suggesting that useful behavioral control may not require uniform intervention across the full sampling trajectory.",
    tags: ["Masked Diffusion LMs", "LLaDA", "Denoising Steps", "Inference Efficiency", "Model Evaluation"]
  },
  {
    title: "OpenAI Parameter Golf Challenge - Experimental Submission",
    description:
      "Experimental small-model optimization submission to OpenAI's parameter-golf challenge, focused on compression, quantization, and evaluation under strict artifact-size constraints. Improved FineWeb validation BPB from 1.2244 to approximately 1.147 in a 15.8MB quantized artifact using quantization, EMA, int6 export, late QAT, partial RoPE, and embedding/activation changes.",
    tags: ["Model Compression", "Quantization", "Evaluation", "FineWeb BPB", "Small Models"]
  }
];
