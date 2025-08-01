import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Function-Calling in LLMs: Beyond Simple APIs",
      excerpt: "Exploring how function-calling capabilities in large language models are evolving from simple API interactions to complex, multi-step reasoning processes.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["LLM", "Function-Calling", "AI Research"],
      featured: true
    },
    {
      title: "Debugging Multimodal Models: What I Learned from 6 Months of Vision-Language Research",
      excerpt: "A behind-the-scenes look at the challenges and breakthroughs in training vision-language models, including common failure modes and debugging strategies.",
      date: "2024-01-08",
      readTime: "12 min read",
      tags: ["Vision-Language", "Debugging", "Research Process"]
    },
    {
      title: "From Academic Research to Production: Lessons from Scaling AI Systems",
      excerpt: "Bridging the gap between research prototypes and production systems - what works, what doesn't, and what I wish I knew earlier.",
      date: "2023-12-20",
      readTime: "10 min read",
      tags: ["Production ML", "Scaling", "Applied Science"]
    },
    {
      title: "Why Context Windows Matter More Than You Think in Conversational AI",
      excerpt: "Deep dive into how context length affects dialogue quality, memory management, and user experience in conversational systems.",
      date: "2023-12-10",
      readTime: "6 min read",
      tags: ["Conversational AI", "Context", "User Experience"]
    },
    {
      title: "Paper Review: Attention Is All You Need (5 Years Later)",
      excerpt: "Reflecting on the transformative impact of the Transformer architecture and what the next 5 years might bring to attention mechanisms.",
      date: "2023-11-25",
      readTime: "15 min read",
      tags: ["Transformers", "Paper Review", "Deep Learning"]
    },
    {
      title: "Building Evaluation Frameworks That Actually Matter",
      excerpt: "Why most AI evaluation metrics miss the point and how to design evaluation frameworks that capture real-world performance.",
      date: "2023-11-15",
      readTime: "9 min read",
      tags: ["Evaluation", "Metrics", "Research Methods"]
    }
  ];

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Research", count: 4 },
    { name: "Technical Deep Dives", count: 3 },
    { name: "Industry Insights", count: 2 },
    { name: "Paper Reviews", count: 1 }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Writings</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Thoughts on AI research, technical insights, and lessons learned from building 
            intelligent systems at scale.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts
          .filter(post => post.featured)
          .map((post, index) => (
            <Card key={index} className="mb-12 shadow-elevated border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-gradient-accent text-white">Featured</Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl mb-4 leading-tight">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="gradient" asChild className="shadow-glow">
                  <Link to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts
            .filter(post => !post.featured)
            .map((post, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl mb-3 leading-tight">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="minimal" asChild className="p-0 h-auto font-semibold">
                    <Link to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-16 text-center py-12 bg-muted/30 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get notified when I publish new articles about AI research, technical insights, 
            and industry developments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
            />
            <Button variant="gradient" className="shadow-glow">
              Subscribe
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
