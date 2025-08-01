import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play, Star, GitFork } from "lucide-react";

const Code = () => {
  const repositories = [
    {
      name: "conversational-planning",
      description: "Hierarchical planning framework for multi-agent conversational systems with reinforcement learning",
      language: "Python",
      stars: 245,
      forks: 67,
      topics: ["conversational-ai", "planning", "reinforcement-learning", "pytorch"],
      demo: "#",
      featured: true
    },
    {
      name: "vision-language-adapter",
      description: "Parameter-efficient adaptation techniques for vision-language models on specialized tasks",
      language: "Python",
      stars: 189,
      forks: 34,
      topics: ["vision-language", "adaptation", "transformers", "huggingface"],
      demo: "#"
    },
    {
      name: "function-call-eval",
      description: "Comprehensive evaluation framework for function-calling capabilities in large language models",
      language: "Python",
      stars: 156,
      forks: 23,
      topics: ["llm", "evaluation", "function-calling", "benchmarks"]
    },
    {
      name: "multimodal-document-ai",
      description: "End-to-end document understanding with layout-aware transformers for text, images, and spatial reasoning",
      language: "Python",
      stars: 312,
      forks: 89,
      topics: ["document-ai", "multimodal", "ocr", "layout-analysis"],
      demo: "#"
    },
    {
      name: "edge-vision-pipeline",
      description: "Lightweight computer vision pipeline optimized for real-time scene analysis on edge devices",
      language: "Python",
      stars: 134,
      forks: 45,
      topics: ["computer-vision", "edge-computing", "optimization", "tensorrt"]
    },
    {
      name: "memory-dialogue",
      description: "Memory-augmented dialogue systems for maintaining long-term conversational context",
      language: "Python",
      stars: 98,
      forks: 28,
      topics: ["dialogue-systems", "memory", "context", "nlp"]
    }
  ];

  const demos = [
    {
      title: "Interactive Function-Calling Demo",
      description: "Try out our function-calling evaluation framework with live examples and custom API definitions",
      tech: ["Python", "Streamlit", "OpenAI API"],
      link: "#",
      image: "gradient-accent"
    },
    {
      title: "Document Understanding Playground",
      description: "Upload documents and see real-time analysis of text, layout, and visual elements",
      tech: ["React", "Python", "TensorFlow"],
      link: "#",
      image: "gradient-hero"
    },
    {
      title: "Vision-Language Model Explorer",
      description: "Explore how vision-language models interpret and describe complex scenes and images",
      tech: ["Jupyter", "PyTorch", "CLIP"],
      link: "#",
      image: "gradient-section"
    }
  ];

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "Python": return "bg-blue-500/10 text-blue-600";
      case "JavaScript": return "bg-yellow-500/10 text-yellow-600";
      case "TypeScript": return "bg-blue-600/10 text-blue-700";
      case "Jupyter Notebook": return "bg-orange-500/10 text-orange-600";
      default: return "bg-gray-500/10 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Code & Demos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Open-source implementations, interactive demos, and reusable components for 
            AI research and development.
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Repositories</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">1.2k</div>
              <div className="text-sm text-muted-foreground">Stars</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">350</div>
              <div className="text-sm text-muted-foreground">Forks</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-sm text-muted-foreground">Contributors</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Repository */}
        {repositories
          .filter(repo => repo.featured)
          .map((repo, index) => (
            <Card key={index} className="mb-12 shadow-elevated border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-gradient-accent text-white">Featured</Badge>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                      <Github className="w-6 h-6" />
                      {repo.name}
                    </CardTitle>
                    <p className="text-muted-foreground text-lg">
                      {repo.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className={getLanguageColor(repo.language)}>
                    {repo.language}
                  </Badge>
                  {repo.topics.map((topic) => (
                    <Badge key={topic} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button variant="gradient" asChild className="shadow-glow">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {repo.demo && (
                    <Button variant="outline" asChild>
                      <a href={repo.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

        {/* Other Repositories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Research Repositories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories
              .filter(repo => !repo.featured)
              .map((repo, index) => (
                <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      {repo.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {repo.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getLanguageColor(repo.language)}>
                        {repo.language}
                      </Badge>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          <span>{repo.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          <span>{repo.forks}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      {repo.demo && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={repo.demo} target="_blank" rel="noopener noreferrer">
                            <Play className="w-3 h-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* Interactive Demos */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Interactive Demos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth">
                <CardHeader>
                  <div className={`h-40 ${demo.image} rounded-lg mb-4 flex items-center justify-center`}>
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{demo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {demo.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {demo.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="gradient" asChild className="w-full shadow-glow">
                    <a href={demo.link} target="_blank" rel="noopener noreferrer">
                      Try Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* GitHub CTA */}
        <section className="text-center py-12 bg-muted/30 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Follow My Work</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Stay updated with my latest research implementations and open-source contributions 
            on GitHub.
          </p>
          <Button variant="gradient" size="lg" asChild className="shadow-glow">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Follow on GitHub
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Code;
