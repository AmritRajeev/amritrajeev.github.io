import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Eye, MessageSquare, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-section"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-hero p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Brain className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Amrit R
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
              Data Scientist | GenAI & Machine Learning
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I build intelligent GenAI systems and quantum-classical hybrid solutions for enterprise applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild variant="gradient" size="lg" className="shadow-glow">
                <Link to="/research">
                  Explore Research <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="professional" size="lg">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/amritrajeev" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:amritrajeev42@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized in GenAI, multimodal learning, and quantum computing applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elevated transition-smooth border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-accent-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Generative AI</h3>
                <p className="text-muted-foreground">
                  Document QA bots, RAG pipelines, and LLM-based enterprise solutions using Langchain and cloud infrastructure.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elevated transition-smooth border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-accent-purple/10 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-accent-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Multimodal AI</h3>
                <p className="text-muted-foreground">
                  Healthcare AI for chest X-ray analysis, vision transformers, and image-text matching using BLIP/BLIP2 models.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elevated transition-smooth border-0 md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-accent-teal/10 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Quantum Computing</h3>
                <p className="text-muted-foreground">
                  QAOA algorithms, D-Wave annealing, and quantum-classical hybrid networks for optimization problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Latest publications and projects in AI research
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="shadow-card hover:shadow-elevated transition-smooth">
                <CardContent className="p-6">
                  <div className="h-40 bg-gradient-accent rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-semibold">Project {i}</span>
                  </div>
                  <h3 className="font-semibold mb-2">Document QA Bot with RAG Pipeline</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Enterprise-grade solution using Langchain and AWS for financial document analysis, reducing processing time by 50%...
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-accent text-xs rounded-md">GenAI</span>
                    <span className="px-2 py-1 bg-accent text-xs rounded-md">RAG</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/research">
                View All Research <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;