import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const skills = [
  { name: "Web Development", level: 85, category: "web" },
  { name: "React.js", level: 80, category: "web" },
  { name: "UI/UX Design", level: 90, category: "Graphic designing" },
  { name: "Figma", level: 90, category: "Graphic designing" },
  { name: "Adobe photoshop", level: 90, category: "Graphic designing" },
  { name: "Git & GitHub", level: 85, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Touch Typing", level: 80, category: "other" },
  { name: "Core Java", level: 65, category: "other" },
  { name: "DSA", level: 50, category: "other" },
  { name: "SQL", level: 65, category: "other" },
];

const categories = ["all", "web","Graphic designing", "tools", "other"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              whileInView={{ scale: 1.05 }}
              initial={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {category.replace("-", " ")}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: key * 0.1 }}
            >
              <div className="mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-primary h-2 rounded-full origin-left"
                  style={{ width: skill.level + "%" }}
                  whileInView={{ width: skill.level + "%" }}
                  initial={{ width: 0 }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
