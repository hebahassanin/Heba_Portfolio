import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Organic Food",
    description:
      "A responsive organic food e-commerce website built with React and TypeScript, featuring product browsing, category and price filtering, and interactive sliders using Swiper.js. The project is currently in development, with additional features such as the shopping cart and checkout flow being implemented.",
    image: "/images/projects/OrganicFood_Screenshoot.png",
    technologies: ["React","TypeScript", "Tailwind CSS", "React Router","Swiper.js"],
    github: "https://github.com/hebahassanin/Organic-Foods",
    live: "https://organic-foods-lyart.vercel.app/",
  },
  {
  title: "Quiz Management System",
  description:
    "A role-based quiz management platform built with React and TypeScript, supporting Instructor and Student roles. Instructors can create and manage quizzes, students can join timed exams using access codes, and both roles can manage and track quiz-related data through protected, role-based interfaces.",
  image: "/images/projects/QuizApp_Screenshoot.png",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "React Hook Form",
    "Axios",
  ],
  github: "https://github.com/hebahassanin/Quiz-App",
  live: "https://quiz-app-psi-puce.vercel.app/",
},
{
  title: "Food Management System",
  description:
    "A role-based food management application built with React, featuring complete authentication and separate Admin and User experiences. Admins can manage users, recipes, and categories through CRUD operations, while users can browse recipes and manage their favorite recipes. The application integrates REST APIs with protected routes and form handling.",
  image: "/images/projects/FoodApp_Screenshoot.png",
  technologies: [
    "React",
    "Bootstrap",
    "React Hook Form",
    "React Router",
    "REST API",
    "CSS Animations",
  ],
  github: "https://github.com/hebahassanin/food-app",
  live: "https://food-app-flame-xi.vercel.app/",
},
  {
    title: "Online Bookstore",
    description:
      "A responsive online bookstore built with React and TypeScript, featuring customer authentication, book browsing, filtering by name, price, and category, shopping cart functionality, and Stripe payment integration. The project also includes interactive sliders built with Swiper.js and REST API integration for managing book data.",
    image: "/images/projects/BookStore_Screenshot.png",
    technologies: ["React", "TypeScript", "MUI", "Redux Toolkit","Stripe","Swiper.js"],
    github: "https://github.com/hebahassanin/online-bookstore",
    live: "https://online-bookstore-tau.vercel.app/",
  },
  {
    title: "PMS",
    description:
      "A role-based Project Management System built with React, featuring authentication, protected routes, task management, and interactive dashboards. Managers can manage projects and tasks, while employees organize their work through a drag-and-drop Kanban board.",
    image: "/images/projects/Pms_ScreenShoot.png",
    technologies: ["React", "React Bootstrap", "Context API", "chart.js","React Hook Form","Dnd Kit"],
    github: "https://github.com/hebahassanin/Project-Management-System",
    live: "https://project-management-system-omega-five.vercel.app/",
  },
  
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative max-w-6xl mx-auto px-6 py-20 text-white"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-96 h-96 bg-purple-600/10 blur-[120px]
        rounded-full pointer-events-none -z-10"
      />

      {/* Section Heading */}
      <div className="flex flex-col items-center text-center mb-12">
        <span
          className="text-xs font-semibold uppercase tracking-widest
          text-purple-400 mb-3 px-4 py-1.5 rounded-full
          bg-purple-500/10 border border-purple-500/20 backdrop-blur-md">
          PROJECTS
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          My Recent Work
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base">
          Here are some of the projects I've built while developing
          my frontend skills.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl
            bg-white/5 border border-white/10 backdrop-blur-md
            hover:border-purple-500/40 hover:-translate-y-1
            transition-all duration-300 shadow-lg"
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="w-full h-52 object-cover
                group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md
                    bg-purple-500/10 text-purple-300
                    text-xs border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2
                  py-2.5 rounded-lg border border-white/10
                  hover:bg-white/10 transition text-sm"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2
                  py-2.5 rounded-lg bg-purple-600
                  hover:bg-purple-500 transition text-sm"
                >
                  Live Demo
                  <HiOutlineExternalLink className="text-lg" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}