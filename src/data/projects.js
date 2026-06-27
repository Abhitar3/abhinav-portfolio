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
    links: [{ label: 'View GitHub', href: 'https://github.com/Abhitar3/SanjayaAi' }],
  },
  {
    title: 'E-Commerce Chatbot with Multi-Intent Classification',
    category: 'LLM App | Semantic Routing | NL-to-SQL | Streamlit',
    status: 'Completed',
    description:
      'Built an end-to-end AI e-commerce chatbot that lets users ask natural language questions about store policies and product availability. The chatbot uses semantic routing to classify queries into FAQ or product-search intents, retrieves FAQ answers from a structured knowledge base, and converts product questions into SQL queries over a SQLite catalog. Product results include price, discount, rating, and clickable Flipkart product links. The app is deployed with Streamlit and includes fallback handling for unmatched intents and LLM context-length errors.',
    features: [
      'Built dual-route intent handling for FAQ and SQL queries using semantic-router and all-MiniLM-L6-v2 embeddings',
      'Achieved 82.5% routing accuracy and 0.80 Macro-F1 on a 40-query internal robustness evaluation set',
      'Implemented Groq-powered natural-language-to-SQL search over a SQLite product catalog with product title, brand, price, discount, rating, total ratings, and product links',
      'Reached 90% FAQ answer accuracy on a paraphrased internal support-query evaluation set',
      'Created a data pipeline using Selenium-based Flipkart scraping, CSV preprocessing, and SQLite ingestion',
      'Added fallback routing and context-length-safe response formatting for ambiguous queries and large SQL outputs',
      'Deployed the chatbot as an interactive Streamlit web app with live product-search and FAQ demo support',
    ],
    skills: [
      'Python',
      'Streamlit',
      'Groq',
      'Semantic Router',
      'all-MiniLM-L6-v2',
      'SQLite',
      'Selenium',
      'Pandas',
      'NL-to-SQL',
      'Intent Classification',
    ],
    links: [
      { label: 'View GitHub', href: 'https://github.com/Abhitar3/Ecommerce_chatbot' },
      { label: 'Live Demo', href: 'https://abhitar-ecommerce-chatbot.streamlit.app/' },
    ],
  },
  {
    title: 'Intelligent Research Tool',
    category: 'RAG | Streamlit | LangChain | ChromaDB',
    status: 'Completed',
    description:
      'An AI-powered research assistant that ingests up to three URLs, builds a vector database from their content, and answers questions using a Retrieval-Augmented Generation pipeline. The app combines URL processing, chunking, embeddings, persistent Chroma storage, and Groq-powered answer generation in a simple Streamlit interface.',
    features: [
      'Built URL ingestion from Streamlit sidebar inputs',
      'Added automatic chunking and embedding of scraped content',
      'Used a persistent Chroma vector store for retrieval',
      'Implemented question answering with ChatGroq and a custom prompt template',
      'Designed a simple workflow for non-technical research use cases',
    ],
    skills: ['Python', 'Streamlit', 'LangChain', 'ChromaDB', 'Hugging Face', 'Groq', 'RAG'],
    links: [
      { label: 'View GitHub', href: 'https://github.com/Abhitar3/intelligent-research-tool' },
    ],
  },
  {
    title: 'NLP/LLM Research Pipeline for Entity-Aspect-Sentiment Extraction',
    category: 'Research | NLP | LLM Systems | LangChain',
    status: 'Current Research',
    description:
      'An ongoing NLP/LLM research pipeline for transforming Stack Overflow-style developer discussions into auditable Entity-Aspect-Sentiment triples. The work focuses on schema-constrained extraction, sentence-level processing, software entity mention tracking, aspect and sentiment classification, and comparison against human annotations to study model errors and refine prompts.',
    features: [
      'Built JSON-first extraction workflows with schema validation for structured NLP outputs',
      'Designed LangChain/OpenAI prompt chains for software entity extraction, aspect classification, and sentiment labeling',
      'Implemented preprocessing with HTML stripping, NLTK sentence segmentation, and sentence-level triple assembly',
      'Developed entity mention tracking and post-level coreference experiments for resolving referring expressions',
      'Added retries, deduplication, timing logs, debug traces, and failure-case inspection utilities',
      'Compared system predictions with human annotations to analyze boundary cases and refine prompts',
    ],
    skills: [
      'Python',
      'LangChain',
      'OpenAI API',
      'NLP',
      'Prompt Engineering',
      'JSON',
      'Model Evaluation',
      'Aspect-Based Sentiment Analysis',
      'Information Extraction',
      'Research Pipeline',
    ],
    links: [],
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
    links: [
      { label: 'View GitHub', href: 'https://github.com/Abhitar3/News-Summarization-Model-Comparison' },
      { label: 'View Poster', href: 'https://github.com/Abhitar3/News-Summarization-Model-Comparison/blob/main/Final_Poster.pdf' },
    ],
  },
  {
    title: 'Image Classification Pipeline with EfficientNet',
    category: 'Computer Vision | PyTorch | Transfer Learning',
    status: 'Completed',
    description:
      'An anime character recognition system using EfficientNet-B0 transfer learning for multi-class image classification. The project compares classical machine learning baselines with deep learning approaches and uses the Kaggle anime character dataset through kagglehub for reproducible data access.',
    features: [],
    skills: ['Python', 'PyTorch', 'EfficientNet', 'Transfer Learning', 'Data Augmentation'],
    links: [
      { label: 'View GitHub', href: 'https://github.com/Abhitar3/Anime-Character-Classification-EfficientNet' },
      { label: 'View Presentation', href: 'https://github.com/Abhitar3/Anime-Character-Classification-EfficientNet/blob/main/MATH637_PPT.pdf' },
    ],
  },
]
