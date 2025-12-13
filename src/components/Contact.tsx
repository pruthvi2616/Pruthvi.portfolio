import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/pruthviraj-k-p-b4940025b/",
      color: "hover:text-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/pruthvi2616",
      color: "hover:text-white",
    },
    {
      icon: Mail,
      label: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=pruthvi2616@gmail.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16 animate-slide-up">
          <h2
            className="text-5xl md:text-6xl font-bold text-glow-cyan"
            style={{ fontFamily: "'Playfair Display','Georgia',serif" }}
          >
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            I’m always happy to connect! Whether you want to discuss an idea,
            collaborate, or just say hello, feel free to reach out.
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-6 animate-fade-in">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`glass-card p-5 rounded-full transition-all hover:scale-110 ${social.color}`}
            >
              <social.icon className="w-7 h-7" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
