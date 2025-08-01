import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Users } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Link State Hop-Hop Routing for CV2S",
      authors: "Amrit R, Dr. Sandhia Valsala",
      venue: "IJERT",
      year: "2021",
      type: "Journal",
      description: "Research on routing protocols for vehicle-to-satellite communication systems, focusing on link state routing mechanisms for improved connectivity in dynamic network environments.",
      links: {
        pdf: "#"
      },
      tags: ["Wireless Networks", "Routing", "V2S Communication"]
    },
    {
      title: "Energy-Efficient Reinforcement Learning in Wireless Sensor Networks Using 5G for Smart Cities",
      authors: "M.S. Pramod, Arun Balodi, Aditya Pratik, G. Satya Sankalp, B Varshita, R. Amrit",
      venue: "Book Chapter",
      year: "2021",
      type: "Book Chapter",
      description: "Comprehensive study on implementing energy-efficient reinforcement learning algorithms in wireless sensor networks leveraging 5G technology for smart city applications.",
      links: {
        pdf: "#"
      },
      tags: ["Reinforcement Learning", "WSN", "5G", "Smart Cities"]
    },
    {
      title: "Building Pipelines and Environments for Large Language Models (LLMOps)",
      authors: "Amrit R (Contributor)",
      venue: "Mphasis White Paper",
      year: "2023",
      type: "White Paper",
      description: "Technical white paper exploring best practices for building robust pipelines and operational environments for Large Language Models, covering deployment, monitoring, and optimization strategies.",
      links: {
        pdf: "#"
      },
      tags: ["LLMOps", "MLOps", "LLM", "DevOps"]
    }
  ];

  const getVenueColor = (venue: string) => {
    if (venue.includes("NeurIPS")) return "bg-accent-blue/10 text-accent-blue";
    if (venue.includes("ICLR")) return "bg-accent-purple/10 text-accent-purple";
    if (venue.includes("EMNLP") || venue.includes("ACL")) return "bg-accent-teal/10 text-accent-teal";
    if (venue.includes("CVPR") || venue.includes("ICCV")) return "bg-orange-500/10 text-orange-600";
    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Peer-reviewed research contributions to the fields of conversational AI, 
            computer vision, and multimodal learning.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Publications</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">Multiple</div>
              <div className="text-sm text-muted-foreground">White Papers</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </CardContent>
          </Card>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 leading-tight">
                      {pub.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Users className="w-4 h-4" />
                      <span>{pub.authors}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getVenueColor(pub.venue)}>
                        {pub.venue}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{pub.year}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {pub.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {pub.links.pdf && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.links.pdf}>
                        <FileText className="w-4 h-4 mr-1" />
                        PDF
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <section className="mt-16 text-center py-12 bg-muted/30 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Complete Publication List</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            For a complete list of publications, preprints, and academic contributions, 
            visit my Google Scholar profile.
          </p>
          <Button variant="gradient" size="lg" asChild className="shadow-glow">
            <a href="#" target="_blank" rel="noopener noreferrer">
              View Google Scholar <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Publications;