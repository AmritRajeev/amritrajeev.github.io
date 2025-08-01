import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, FileText } from "lucide-react";

const Research = () => {
  const genAI = [
    {
      title: "Document QA Bot with Langchain",
      description: "Enterprise-grade solution for financial document analysis using RAG architecture and AWS infrastructure, achieving 50% reduction in processing time for institutional investors.",
      tags: ["GenAI", "RAG", "Langchain"],
      links: {
        paper: "#",
        code: "#",
        demo: "#"
      },
      image: "gradient-accent"
    },
    {
      title: "Enterprise RAG Migration Solution",
      description: "Contextual RAG pipeline using Anthropic Claude-2.1 for extracting IAM roles from enterprise documents, reducing migration time by 40% with SailPoint integration.",
      tags: ["RAG", "Claude-2.1", "Enterprise"],
      links: {
        paper: "#",
        code: "#"
      },
      image: "gradient-hero"
    },
    {
      title: "RFP Processing with LLMs",
      description: "Retrieval and extraction solution for Request for Proposal documents using GPT-4.o, with evaluation pipelines that decreased RFP turnover by 75%.",
      tags: ["LLM", "GPT-4.o", "Document AI"],
      links: {
        paper: "#",
        code: "#",
        demo: "#"
      },
      image: "gradient-section"
    }
  ];

  const multimodalAI = [
    {
      title: "Healthcare Multimodal AI",
      description: "Chest X-ray defect detection using vision transformers and language models with ITM, LM, and ITC losses for enhanced image-text understanding in medical imaging.",
      tags: ["Healthcare AI", "BLIP/BLIP2", "Vision Transformers"],
      links: {
        paper: "#",
        code: "#"
      },
      image: "gradient-accent"
    },
    {
      title: "SWIN Transformer Fine-tuning",
      description: "Parameter-Efficient Fine-Tuning using LoRA methodology for SWIN transformers and Llama2 models in multimodal medical applications.",
      tags: ["SWIN", "LoRA", "PEFT"],
      links: {
        paper: "#",
        code: "#",
        demo: "#"
      },
      image: "gradient-hero"
    },
    {
      title: "Image-Text Contrastive Learning",
      description: "Implementation of Image-Text Matching Loss and Contrastive Loss for learning representations between medical images and reports.",
      tags: ["Contrastive Learning", "Medical AI", "Multimodal"],
      links: {
        code: "#",
        demo: "#"
      },
      image: "gradient-section"
    }
  ];

  const quantumComputing = [
    {
      title: "Quantum Vehicle Routing (CVRP)",
      description: "QUBO solutions for Capacitated Vehicle Routing Problems using QAOA gate-based approaches and D-Wave annealing systems for optimization.",
      tags: ["QAOA", "D-Wave", "Optimization"],
      links: {
        paper: "#",
        code: "#"
      },
      image: "gradient-accent"
    },
    {
      title: "Quantum-Classical Hybrid Networks",
      description: "Integration of quantum and classical neural networks across diverse use cases, achieving substantial runtime reductions and enhanced cost efficiency.",
      tags: ["Hybrid Networks", "Quantum ML", "Optimization"],
      links: {
        paper: "#",
        code: "#"
      },
      image: "gradient-hero"
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="shadow-card hover:shadow-elevated transition-smooth">
      <CardHeader>
        <div className={`h-48 ${project.image} rounded-lg mb-4 flex items-center justify-center`}>
          <span className="text-white font-semibold text-lg">{project.title}</span>
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.links.paper && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.paper}>
                <FileText className="w-4 h-4 mr-1" />
                Paper
              </a>
            </Button>
          )}
          {project.links.code && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.code}>
                <Github className="w-4 h-4 mr-1" />
                Code
              </a>
            </Button>
          )}
          {project.links.demo && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.demo}>
                <Play className="w-4 h-4 mr-1" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Developing cutting-edge GenAI solutions, multimodal AI systems, 
            and quantum computing applications for enterprise challenges.
          </p>
        </div>

        {/* GenAI Section */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-accent-blue">Generative AI & RAG Systems</h2>
            <p className="text-lg text-muted-foreground max-w-4xl">
              Building enterprise-grade GenAI solutions with RAG architectures, document understanding, 
              and LLM-based applications using cutting-edge frameworks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {genAI.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Multimodal AI Section */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-accent-purple">Multimodal AI & Healthcare</h2>
            <p className="text-lg text-muted-foreground max-w-4xl">
              Developing advanced multimodal systems for healthcare applications, combining vision transformers 
              and language models for medical image analysis and understanding.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {multimodalAI.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Quantum Computing Section */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-accent-teal">Quantum Computing</h2>
            <p className="text-lg text-muted-foreground max-w-4xl">
              Exploring quantum optimization algorithms and quantum-classical hybrid networks 
              for solving complex computational problems with enhanced efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {quantumComputing.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="text-center py-16 bg-muted/30 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing research opportunities, collaborations, and innovative projects 
            in AI and machine learning.
          </p>
          <Button variant="gradient" size="lg" asChild className="shadow-glow">
            <a href="/contact">
              Get In Touch <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Research;