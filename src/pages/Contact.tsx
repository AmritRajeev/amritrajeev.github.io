import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Twitter, Github, MapPin, Calendar, MessageSquare, Users, FileText, Coffee } from "lucide-react";

const Contact = () => {
  const contactReasons = [
    {
      icon: Users,
      title: "Research Collaboration",
      description: "Joint research projects, academic partnerships, or interdisciplinary work"
    },
    {
      icon: MessageSquare,
      title: "Speaking Engagements",
      description: "Conference talks, workshop presentations, or podcast appearances"
    },
    {
      icon: FileText,
      title: "Consulting & Advisory",
      description: "Technical consulting, product strategy, or advisory roles"
    },
    {
      icon: Coffee,
      title: "General Discussion",
      description: "Industry insights, career advice, or just a friendly chat about AI"
    }
  ];

  const socialLinks = [
    {
      platform: "Email",
      handle: "amritrajeev42@gmail.com",
      url: "mailto:amritrajeev42@gmail.com",
      icon: Mail,
      color: "text-red-500"
    },
    {
      platform: "LinkedIn",
      handle: "linkedin.com/in/amritrajeev",
      url: "https://linkedin.com/in/amritrajeev",
      icon: Linkedin,
      color: "text-blue-600"
    },
    {
      platform: "Twitter",
      handle: "@amritr_ai",
      url: "#",
      icon: Twitter,
      color: "text-sky-500"
    },
    {
      platform: "GitHub",
      handle: "github.com/amritr",
      url: "#",
      icon: Github,
      color: "text-gray-700"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm passionate about collaborating on GenAI projects, quantum computing applications, 
            and enterprise AI solutions. Let's connect and explore innovative opportunities together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section>
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  I typically respond within 24-48 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="What would you like to discuss?" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project, research, or how I can help..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button variant="gradient" size="lg" className="w-full shadow-glow">
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  I respect your privacy. Your information will never be shared with third parties.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Contact Info & Social */}
          <section className="space-y-8">
            {/* What I'm interested in */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">I'm interested in discussing...</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactReasons.map((reason, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/50">
                      <reason.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{reason.title}</h4>
                        <p className="text-sm text-muted-foreground">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Connect on Social</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                    >
                      <link.icon className={`w-5 h-5 ${link.color} group-hover:scale-110 transition-transform`} />
                      <div>
                        <div className="font-medium">{link.platform}</div>
                        <div className="text-sm text-muted-foreground">{link.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location & Availability */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Location & Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Bangalore, India</div>
                    <div className="text-sm text-muted-foreground">Indian Standard Time (UTC+5:30)</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Available for meetings</div>
                    <div className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 6 PM IST</div>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm">
                    <strong>Note:</strong> Currently accepting select consulting engagements 
                    and research collaborations. Please include project details in your message.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I aim to respond to all messages within 24-48 hours. For urgent matters, 
                  please mention "URGENT" in your subject line.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Collaboration Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I'm always open to interesting collaborations, especially in 
                  GenAI, multimodal AI, quantum computing, and enterprise AI solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Speaking Engagements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I enjoy speaking at conferences and events. Please include event details, 
                  audience size, and timeline in your inquiry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Student Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  While I can't respond to all student messages individually, I do offer 
                  occasional virtual office hours. Follow my social media for announcements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;