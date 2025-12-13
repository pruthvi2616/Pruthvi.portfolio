import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const TechBadge = ({ name, icon }: { name: string; icon: JSX.Element }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs hover:scale-105 transition">
    {icon}
    {name}
  </div>
);

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  fullDescription: string;
  techUsed: { name: string; icon: JSX.Element }[];
  githubUrl?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "VR CNC Lathe Machine Training Simulator",
      description: "Industrial VR training simulator for CNC lathe operation.",
      thumbnail: "cnc.png",
      videoUrl:
        "https://drive.google.com/file/d/11yIls2FarQ9yldX6_l_2ntUx1V7WZtpo/preview",
      fullDescription:
        "A VR-based CNC training simulator built using Unity, C#, and XR Interaction Toolkit for safe industrial training.",
      techUsed: [
        {
          name: "Unity",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "C#",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        { name: "XR Toolkit", icon: <Play className="w-4 h-4 text-primary" /> },
      ],
    },

    {
      id: 2,
      title: "VR Rehabilitation for Physical Therapy",
      description: "Gamified VR therapy for physical rehabilitation.",
      thumbnail: "vrrehab.png",
      videoUrl:
        "https://drive.google.com/file/d/1T6aaNT0u2ujfSZtRgM03hcLI951e3A-h/preview",
      fullDescription:
        "VR rehabilitation system for neck and shoulder therapy with real-time feedback.",
      techUsed: [
        {
          name: "Unity",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "C#",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        { name: "XR Toolkit", icon: <Play className="w-4 h-4 text-primary" /> },
      ],
    },

    {
      id: 3,
      title: "VR Disaster Training Simulator",
      description: "Emergency response VR simulation.",
      thumbnail: "disaster.png",
      videoUrl:
        "https://drive.google.com/file/d/1shMisIQU-hiMjhWWF_gVJppsKUfF33v8/preview",
      fullDescription:
        "VR-based disaster management simulator for emergency preparedness.",
      techUsed: [
        {
          name: "Unity",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "C#",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              className="w-4 h-4"
            />
          ),
        },
      ],
    },

    {
      id: 4,
      title: "3D Multiplayer Game (Photon)",
      description: "Real-time multiplayer 3D game.",
      thumbnail: "multiplayer.png",
      videoUrl:
        "https://drive.google.com/file/d/1GWjZbxPvZCQNf9uLa8tPltIG3UPjFMBj/preview",
      fullDescription:
        "Multiplayer game built with Unity and Photon networking.",
      techUsed: [
        {
          name: "Unity",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "Photon",
          icon: (
            <img
              src="https://avatars.githubusercontent.com/u/767351?s=200&v=4"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "C#",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              className="w-4 h-4"
            />
          ),
        },
      ],
    },

    {
      id: 5,
      title: "Flappy Bird Clone",
      description: "2D arcade-style game built in Unity.",
      thumbnail: "flappy.png",
      videoUrl:
        "https://drive.google.com/file/d/1RXGZHRL4W_m2ezfMNJVZr3qX1g3eB0WO/preview",
      fullDescription: "Flappy Bird clone with scoring and collision logic.",
      techUsed: [
        {
          name: "Unity",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "C#",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              className="w-4 h-4"
            />
          ),
        },
      ],
    },

    {
      id: 6,
      title: "Chess Game (2D)",
      description: "2D chess game with full move logic.",
      thumbnail: "chess2.png",
      videoUrl:
        "https://drive.google.com/file/d/1oYqKmRAxEZ4XEeMtUNcj17nu4erCb3Vp/preview",
      fullDescription: "Unity-based chess game with turn validation.",
      techUsed: [
        {
          name: "Unity",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "C#",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              className="w-4 h-4"
            />
          ),
        },
      ],
    },

    {
      id: 7,
      title: "Namma Kannada Utsava – Event Website",
      description: "Cultural event website using React & Firebase.",
      thumbnail: "/utsava-banner.png",
      videoUrl: "https://nammakannadautsava.vercel.app/",
      fullDescription: "React + Tailwind event website with Firebase backend.",
      techUsed: [
        {
          name: "React",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "Tailwind",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "Firebase",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              className="w-4 h-4"
            />
          ),
        },
      ],
      githubUrl: "https://nammakannadautsava.vercel.app/",
    },

    {
      id: 8,
      title: "FARM2MART – Farmer-to-Consumer Platform",
      description: "Direct farmer-to-consumer ecommerce platform.",
      thumbnail: "/farm2martimage.png",
      videoUrl:
        "https://66e10d6cb77c4f7421e195f4--friendly-jalebi-5a40ca.netlify.app/",
      fullDescription:
        "A responsive web marketplace enabling farmers to sell directly to consumers.",
      techUsed: [
        {
          name: "HTML",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "CSS",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "Firebase",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              className="w-4 h-4"
            />
          ),
        },
      ],
      githubUrl:
        "https://66e10d6cb77c4f7421e195f4--friendly-jalebi-5a40ca.netlify.app/",
    },

    {
      id: 9,
      title: "Curve Guard – Smart Road Safety System",
      description:
        "Smart road safety system for blind curves using sensor-based alerts.",
      thumbnail: "/curveguard.png",
      videoUrl: "",
      fullDescription:
        "Curve Guard detects approaching vehicles using Arduino and ultrasonic sensors and provides real-time LED warnings to reduce accidents.",
      techUsed: [
        {
          name: "Arduino",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "C Programming",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "Ultrasonic Sensor",
          icon: <span className="text-xs font-bold">US</span>,
        },
        {
          name: "Embedded Systems",
          icon: <span className="text-xs font-bold">IoT</span>,
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* TITLE + UNDERLINE */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold text-glow-cyan mb-4"
            style={{ fontFamily: "'Playfair Display','Georgia',serif" }}
          >
            My Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="h-48">
                <img
                  src={project.thumbnail}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-2 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techUsed.map((tech, i) => (
                    <TechBadge key={i} name={tech.name} icon={tech.icon} />
                  ))}
                </div>

                {project.videoUrl && (
                  <Button
                    className="w-full mt-auto"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
          </DialogHeader>

          {selectedProject?.videoUrl && (
            <div className="aspect-video">
              <iframe
                src={selectedProject.videoUrl}
                className="w-full h-full"
              />
            </div>
          )}

          <p className="text-muted-foreground leading-relaxed">
            {selectedProject?.fullDescription}
          </p>

          {selectedProject?.githubUrl && (
            <Button
              variant="outline"
              onClick={() => window.open(selectedProject.githubUrl, "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Website
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
