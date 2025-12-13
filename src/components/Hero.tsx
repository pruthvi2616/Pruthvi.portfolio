import { Download, Mail, Gamepad2, Box, ScanLine } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero.jpg";
import resumeFile from "@/assets/Pruthvi_Resume.pdf";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 vr-grid opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8 animate-slide-up relative flex flex-col justify-center">
            {/* Floating Icons */}
            <div className="absolute -left-2 top-16 opacity-40 hidden md:block">
              <Gamepad2 className="w-14 h-14 text-primary animate-float" />
            </div>
            <div className="absolute -right-2 top-16 opacity-40 hidden md:block">
              <Gamepad2 className="w-14 h-14 text-primary animate-float" />
            </div>
            <div className="absolute left-0 bottom-12 opacity-25 hidden md:block rotate-12">
              <Box className="w-16 h-16 text-secondary animate-float" />
            </div>
            <div className="absolute right-0 bottom-12 opacity-30 hidden md:block -rotate-6">
              <ScanLine className="w-14 h-14 text-accent animate-float" />
            </div>

            {/* WELCOME TEXT */}
            <h2
              className="text-3xl md:text-4xl font-bold text-secondary text-center w-full"
              style={{ fontFamily: "'Playfair Display','Georgia',serif" }}
            >
              WELCOME TO MY PORTFOLIO
            </h2>

            {/* NAME */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-glow-cyan text-center"
              style={{ fontFamily: "'Playfair Display','Georgia',serif" }}
            >
              Pruthviraj K P
            </h1>

            {/* DESCRIPTION */}
            <p className="text-lg text-muted-foreground max-w-lg mx-auto text-center">
              Crafting immersive virtual experiences and interactive digital
              worlds with cutting-edge technology and creative innovation.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a href={resumeFile} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
                >
                  <Download className="mr-2 h-5 w-5" />
                  My Resume
                </Button>
              </a>

              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={scrollToProjects}
              >
                My Projects
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-3xl animate-pulse-glow"></div>

              <div className="relative glass-card rounded-3xl overflow-hidden p-2 animate-float">
                <img
                  src={heroImage}
                  alt="VR Developer"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
