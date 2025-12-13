import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2
            className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4"
            style={{ fontFamily: "'Playfair Display','Georgia',serif" }}
          >
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tech Enthusiastic exploring Extended reality, game development,
            AI-ML and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Professional Journey Card */}
          <div className="glass-card p-8 rounded-2xl hover-lift animate-slide-up border border-primary/20 transition-all duration-500 hover:border-primary/40">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                My Journey
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </h3>
            </div>

            <p className="text-foreground/90 leading-relaxed text-base">
              I’m a passionate about technology and who loves building immersive
              experiences and interactive applications. My interest in VR, game
              development, AI-ML and web technologies grew through hands-on
              learning, experimenting with Unity, Unreal, and XR tools. I enjoy
              creating prototypes, designing mechanics, and understanding how
              technology can enhance user interaction.
              <br />
              <br />
              I’m continuously learning, improving my skills, and exploring new
              ideas. I'm excited to begin my professional journey and contribute
              to meaningful and creative digital experiences.
            </p>
          </div>

          {/* Research & Publications Card */}
          <div className="glass-card p-8 rounded-2xl hover-lift animate-slide-up border border-secondary/20 transition-all duration-500 hover:border-secondary/40">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                Research & Publications
                <div className="h-px flex-1 bg-gradient-to-r from-secondary/50 to-transparent"></div>
              </h3>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center glow-blue flex-shrink-0 animate-pulse-glow">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  CNC Lathe Modeling and Training to Mitigate Hazards Using
                  Digital Twin
                </h4>

                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  Published an IEEE-indexed paper focused on integrating Digital
                  Twin, VR, and IoT for safe and efficient CNC lathe training.
                  The project strengthened my understanding of immersive
                  learning environments, real-time simulation, and how advanced
                  technologies can improve industrial training systems.
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary glow-blue group"
                  onClick={() =>
                    window.open(
                      "https://ieeexplore.ieee.org/abstract/document/11183476",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-3 w-3 group-hover:animate-pulse" />
                  View Paper
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
