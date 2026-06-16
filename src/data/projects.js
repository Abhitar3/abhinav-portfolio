export const projects = [
  {
    title: 'Developer Experience in the AI Era: Power BI Analysis of Stack Overflow Developer Survey 2025',
    category: 'Power BI | Data Analytics | AI Adoption Analysis',
    status: 'Completed',
    description:
      'An interactive Power BI project analyzing the Stack Overflow Developer Survey 2025 to understand developer profiles, AI adoption, AI sentiment, job satisfaction, compensation, programming languages, and AI model usage. The project includes data cleaning, dimensional modeling, DAX measures, Sankey flow analysis, and industry-based AI model comparisons.',
    features: [
      'Cleaned and transformed a large real-world survey dataset',
      'Built a 3-table Power BI model with respondent, language, and AI model tables',
      'Created DAX measures for AI learning, AI-agent usage, compensation, and job satisfaction',
      'Analyzed how developer role, experience, education, and industry relate to AI adoption',
      'Designed dashboard pages for respondent profile, AI perception, compensation, technology usage, and AI learning flow',
    ],
    skills: ['Power BI', 'DAX', 'Data Cleaning', 'Data Modeling', 'Survey Analysis', 'Data Visualization'],
    links: [
      { label: 'View Report PDF', href: '/Developer-Experience-AI.pdf' },
      { label: 'View GitHub', href: 'https://github.com/Abhitar3/Developer-Experience-AI-PowerBI' },
      { label: 'View PBIX File', href: '/Developer-Experience-AI.pbix' },
    ],
  },
  {
    title: 'Sanjaya AI: AI Advising Platform',
    category: 'AI Systems | RAG | LangGraph | FastAPI',
    status: 'Completed / In Progress',
    description:
      'A full-stack AI advising platform that transforms student profiles into explainable, prerequisite-safe semester roadmaps using LangGraph and hybrid RAG. The system combines LLM reasoning with deterministic validation for prerequisite closure, term-aware scheduling, credit limits, and schema checks.',
    features: [
      'Built advisor-style Q&A and student intake flow',
      'Used LangGraph and RAG for explainable academic planning',
      'Implemented deterministic validation outside LLM generation',
      'Added Pydantic schema checks for reliable structured outputs',
    ],
    skills: ['Python', 'FastAPI', 'Next.js', 'LangGraph', 'ChromaDB', 'RAG', 'Pydantic'],
    links: [
      { label: 'View GitHub', href: '#' },
      { label: 'View Demo', href: '#' },
    ],
  },
  {
    title: 'E-Commerce Chatbot with Multi-Intent Classification',
    category: 'LLM App | Semantic Routing | NL-to-SQL | Streamlit',
    status: 'Completed',
    description:
      'An AI chatbot with dual intent routing for FAQ and SQL-based product search. The system uses semantic routing to classify user intent, OpenAI-powered natural language to SQL conversion, and a Streamlit interface for product search and FAQ responses.',
    features: [
      'Built dual intent routing for FAQ vs SQL queries',
      'Achieved 82.5% routing accuracy and 0.80 Macro-F1',
      'Created NL-to-SQL product search over SQLite',
      'Added fallback handling for unmatched intents and context-length failures',
      'Reached 90% FAQ accuracy on paraphrase tests',
    ],
    skills: ['LangChain', 'Semantic Router', 'SQLite', 'OpenAI', 'Streamlit', 'Selenium', 'Python'],
    links: [
      { label: 'View GitHub', href: '#' },
      { label: 'View Demo', href: '#' },
    ],
  },
  {
    title: 'NLP/LLM Research Pipeline for Entity-Aspect-Sentiment Extraction',
    category: 'Research | NLP | LLM Systems | LangChain',
    status: 'Current Research',
    description:
      'An end-to-end NLP/LLM research pipeline that converts Stack Overflow posts into auditable sentence-level Entity-Aspect-Sentiment triples for downstream analysis. The system includes entity extraction, mention tracking, coreference handling, aspect classification, sentiment classification, deduplication, and evaluation against human annotations.',
    features: [
      'Built JSON-first workflows for structured NLP outputs',
      'Designed prompt-based entity, aspect, and sentiment extraction',
      'Added guardrails, retries, schema validation, and deduplication',
      'Performed error analysis and annotation comparison',
      'Supports reliable and traceable AI system evaluation',
    ],
    skills: ['Python', 'LangChain', 'OpenAI API', 'NLP', 'Prompt Engineering', 'JSON', 'Model Evaluation'],
    links: [
      { label: 'View GitHub', href: '#' },
      { label: 'Research Summary', href: '#' },
    ],
  },
  {
    title: 'Jailbreak Risk Analyzer',
    category: 'Responsible AI | LLM Safety | Prompt Analysis',
    status: 'Coming Soon',
    description:
      'A planned applied AI safety system that analyzes user prompts for jailbreak risk, prompt injection patterns, unsafe intent, roleplay attacks, encoded attacks, and obfuscated instructions. The system will classify attack type, risk level, and recommend safer response strategies.',
    features: [
      'Detect jailbreak and prompt injection patterns',
      'Classify risk level and attack category',
      'Generate safe response recommendations',
      'Connects theoretical AI ethics research with practical LLM safety tooling',
    ],
    skills: ['Python', 'LLMs', 'Prompt Engineering', 'Responsible AI', 'Classification', 'Guardrails'],
    links: [{ label: 'Coming Soon', href: '#' }],
  },
  {
    title: 'News Summarization Model Comparison',
    category: 'NLP | Deep Learning | Model Evaluation',
    status: 'Completed',
    description:
      'A model comparison project using an abstractive summarization dataset of 55K Inshorts article-summary pairs. Fine-tuned T5-small and GPT-2 models and compared performance using ROUGE and BERTScore.',
    features: [],
    skills: ['Python', 'T5', 'GPT-2', 'Fine-tuning', 'Hugging Face', 'ROUGE', 'BERTScore'],
    links: [{ label: 'View GitHub', href: '#' }],
  },
  {
    title: 'Image Classification Pipeline with EfficientNet',
    category: 'Computer Vision | PyTorch | Transfer Learning',
    status: 'Completed',
    description:
      'An anime face recognition system using EfficientNet transfer learning for multi-class classification. Improved generalization with augmentation, dropout, and early stopping, achieving 92.4% validation accuracy.',
    features: [],
    skills: ['Python', 'PyTorch', 'EfficientNet', 'Transfer Learning', 'Data Augmentation'],
    links: [{ label: 'View GitHub', href: '#' }],
  },
]
