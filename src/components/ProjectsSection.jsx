import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Netflix clone",
    description: "A sleek Netflix clone built with pure HTML and CSS, showcasing responsive design and modern layout techniques.",
    image: "/projects/image.png",
    tags: ["HTML5", "CSS3"],
    demoUrl: "https://responsive-netflix-website-using-ht.vercel.app/",
    githubUrl: "https://github.com/Harsola-Bhavik/Responsive-Netflix-website-using-HTML-and-CSSe",
  },
  {
    id: 2,
    title: "UI / UX designs",
    description:
      "Designed and prototyped user-friendly UI/UX layouts, focusing on clean visuals, intuitive navigation, and responsive interfaces.",
    image: "/projects/image1.png",
    tags: ["Figma"],
    demoUrl: "https://github.com/Harsola-Bhavik/UI-UX",
    githubUrl: "https://github.com/Harsola-Bhavik/UI-UX",
  },
  {
    id: 3,
    title: "Dev-Connector",
    description:
      "Designed a platform for developers to share projects and connect, focusing on clean UI, intuitive user flows, and engaging social media-inspired layouts.",
    image: "/projects/project2.png",
    tags: ["React.js", "Node.js", "MongoDB"],
    demoUrl: "https://github.com/Harsola-Bhavik/Dev-Connector",
    githubUrl: "https://github.com/Harsola-Bhavik/Dev-Connector",
  },
  {
    id: 4,
    title: "ClinicAi-voice-agent",
    description:
      "Built an AI-powered voice assistant for clinics, focusing on clear conversational UI, smooth voice interactions, and an intuitive, patient-friendly interface.",
    image: "/projects/image3.png",
    tags: ["React.js","Tailwind css", "Next.js", "Firebase"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harsola-Bhavik/ClinicAi-voice-agent-",
  },
  {
    id: 5,
    title: "AI Resume Generator",
    description:
      "Developed an AI-driven resume generator that creates professional, customizable templates with a clean, user-friendly interface for seamless resume building.",
    image: "/projects/project4.png",
    tags: ["React.js","Tailwind css", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harsola-Bhavik/AI-Resume-Generator",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Featured <span className="text-primary"> Projects </span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <motion.div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: key * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileInView={{ scale: 1 }}
                  initial={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Harsola-Bhavik"
            whileInView={{ scale: 1.05 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Check My Github <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
