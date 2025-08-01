import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, GraduationCap, Briefcase, Award, Users } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2022-Present",
      role: "Data Scientist",
      company: "Mphasis",
      location: "Bangalore, India",
      description: "Developing cutting-edge GenAI and ML solutions including Document QA Bot with Langchain, RAG-based Enterprise Application migration solution using Anthropic Claude-2.1, and Multi-Modal Chest X-ray defect detection. Led multiple POCs achieving up to 75% reduction in processing time across various domains."
    },
    {
      year: "2021-2022",
      role: "Machine Learning Intern",
      company: "Mphasis",
      location: "Bangalore, India",
      description: "Developed end-to-end ML models for AWS Marketplace deployment. Built AutoML platform UI using Angular, implemented Docker containerization, and deployed on AWS Fargate. Researched quantum computing applications in ML and NLP."
    },
    {
      year: "2018-2022",
      role: "B.Tech in Electronics and Communication Engineering",
      company: "PES University",
      location: "Bengaluru, India",
      description: "Graduated with focus on machine learning and quantum computing research. Published research on wireless sensor networks and routing protocols."
    }
  ];

  const skills = {
    "Machine Learning & AI": ["GenAI", "Deep Learning", "Neural Networks", "CNNs", "RNNs", "AutoML", "Time Series Forecasting"],
    "NLP & Conversational AI": ["LangChain", "LlamaIndex", "RAG", "Document QA", "Large Language Models", "Prompt Engineering"],
    "Computer Vision": ["Multi-Modal Learning", "Vision Transformers", "BLIP/BLIP2", "Image-Text Matching", "Medical Imaging"],
    "Cloud & Engineering": ["AWS", "Azure", "Docker", "CloudFormation", "ECS", "SageMaker", "PostgresDB"],
    "Quantum Computing": ["QAOA", "D-Wave", "Qiskit IBM", "QUBO", "Quantum-Classical Hybrid Networks"],
    "Programming": ["Python", "SQL", "TensorFlow", "PyTorch", "HuggingFace", "Angular", "React"]
  };

  const awards = [
    "Microsoft Certified: Azure AI Fundamentals - 2024",
    "Machine Learning with Python - Coursera 2019",
    "Google Cloud Computing - Qwiklabs 2020",
    "Published Research in IJERT - 2021",
    "Contributed to Mphasis White Papers on LLMOps"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Amrit R</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Data Scientist passionate about building intelligent systems that bridge 
            cutting-edge GenAI research with real-world enterprise solutions.
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Research Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed space-y-4">
              <p>
                I believe in the transformative power of AI when cutting-edge research meets practical enterprise solutions. 
                My work focuses on developing GenAI systems, multi-modal learning models, and quantum computing 
                applications that solve real-world business challenges at scale.
              </p>
              <p>
                My journey in AI started with electronics and communication engineering and has evolved to encompass 
                the intersection of generative AI, computer vision, and quantum computing. I'm particularly excited 
                about building RAG-based systems, document understanding solutions, and quantum-classical hybrid networks 
                that can revolutionize how enterprises process information.
              </p>
              <p>
                Beyond technical implementation, I'm committed to making AI solutions practical and impactful 
                for business transformation. I believe in robust evaluation pipelines, efficient cloud deployments, 
                and building systems that deliver measurable value while pushing the boundaries of what's possible 
                with modern AI technologies.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Academic & Professional Journey</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary">{item.role}</CardTitle>
                      <p className="text-lg font-semibold text-foreground">{item.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-sm font-medium">
                      {item.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Awards & Recognition</h2>
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{award}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Personal Interests */}
        <section className="mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Beyond Research</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed space-y-4">
              <p>
                When I'm not diving deep into GenAI models or optimizing quantum algorithms, you'll find me 
                exploring new technologies and contributing to open-source projects. I'm fascinated by the 
                intersection of quantum computing and machine learning, constantly experimenting with novel 
                approaches to solve complex computational problems.
              </p>
              <p>
                I'm passionate about knowledge sharing and contributing to the AI community through white papers, 
                research publications, and technical demonstrations. I enjoy collaborating with teams to transform 
                innovative ideas into production-ready solutions that drive business value.
              </p>
              <p>
                Perpetual learner and technology enthusiast - I believe that curiosity about emerging technologies 
                and hands-on experimentation leads to breakthrough solutions and innovative problem-solving approaches.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CV Download */}
        <section className="text-center py-12 bg-muted/30 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Curriculum Vitae</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Download my complete academic and professional CV for detailed information 
            about publications, experience, and qualifications.
          </p>
          <Button variant="gradient" size="lg" asChild className="shadow-glow">
            <a href="#" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV (PDF)
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default About;