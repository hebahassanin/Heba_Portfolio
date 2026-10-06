import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiTailwindcss, SiMui, SiFigma } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export default function Skills() {

  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: IoLogoJavascript, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500' },
    { name: 'MUI', icon: SiMui, color: 'text-blue-500' },
    { name: 'REST API', icon: TbApi, color: 'text-emerald-400' },
    { name: 'Git & GitHub', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'Figma', icon: SiFigma, color: 'text-pink-400' },
  ];

  return (
    <section id="skills" className="relative py-20 px-6 max-w-5xl mx-auto text-white">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px]
       h-[350px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md">
          SKILLS
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          My Skills
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10
              backdrop-blur-md hover:border-purple-500/50 hover:bg-white/10 transition-all
               duration-300 shadow-lg group">

              <IconComponent className={`text-2xl sm:text-3xl ${skill.color} 
               group-hover:scale-110 transition-transform duration-200`} />
              <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>

    </section>
  );
}