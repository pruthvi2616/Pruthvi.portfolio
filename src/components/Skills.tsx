import { Code2, Gamepad2, Wrench } from "lucide-react";

const SkillButton = ({ icon, name }: { icon: JSX.Element; name: string }) => (
  <div
    className="
      flex items-center gap-2 px-4 py-2 rounded-full 
      bg-white/5 border border-white/10 
      hover:bg-white/10 hover:border-primary 
      transition-all duration-300 cursor-default
      hover:scale-105 shadow-md backdrop-blur-md
    "
  >
    {icon}
    <span className="text-sm font-medium">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2
            className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4"
            style={{ fontFamily: "'Playfair Display','Georgia',serif" }}
          >
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          {/* Programming Languages */}
          <div className="glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/40 hover-lift transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,245,255,0.4)]">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Programming Languages</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillButton
                name="C#"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="C"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="C++"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="Java"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="Python"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="HTML"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="CSS"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="JavaScript"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="SQL"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
            </div>
          </div>

          {/* Game & XR Development */}
          <div className="glass-card p-8 rounded-2xl border border-secondary/20 hover:border-secondary/40 hover-lift transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary shadow-[0_0_20px_rgba(0,123,255,0.4)]">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Game & VR Development</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillButton
                name="Unity"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="Unreal Engine (Learning)"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="XR Interaction Toolkit"
                icon={<Gamepad2 className="w-5 h-5 text-secondary" />}
              />
              <SkillButton
                name="Photon Networking"
                icon={
                  <img
                    src="https://icon.icepanel.io/Technology/svg/Photon-Engine-.svg"
                    className="w-5 h-5 rounded-sm"
                  />
                }
              />
              <SkillButton
                name="Blender"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
            </div>
          </div>

          {/* Technical Tools */}
          <div className="glass-card p-8 rounded-2xl border border-accent/20 hover:border-accent/40 hover-lift transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent shadow-[0_0_20px_rgba(255,87,34,0.4)]">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Technical Tools</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillButton
                name="React"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="DSA"
                icon={<Code2 className="w-5 h-5 text-accent" />}
              />
              <SkillButton
                name="AI-ML (Learning)"
                icon={
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4712/4712036.png"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="Git"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    className="w-5 h-5"
                  />
                }
              />
              <SkillButton
                name="GitHub"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    className="w-5 h-5 invert"
                  />
                }
              />
              <SkillButton
                name="Firebase"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                    className="w-5 h-5"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
