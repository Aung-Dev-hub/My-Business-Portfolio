import { skillCategories } from "@/data";
import Header from "../general/Header";

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <Header title="Technical Skills" />
      <div className="flex flex-col items-center gap-10">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="w-full">
            {/* Category Title */}
            <h2 className="text-2xl font-semibold text-indigo-500 text-center mb-6">
              {category.title}
            </h2>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    data-aos="flip-right"
                    data-aos-delay={index * 100}
                    className="bg-slate-900 text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/30"
                  >
                    <div className="text-5xl text-gray-300">
                      <Icon />
                    </div>
                    <p className="text-2xl font-semibold my-4 text-gray-200">
                      {skill.skillLevel}%
                    </p>
                    <p className="text-indigo-500 text-1xl font-bold">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}