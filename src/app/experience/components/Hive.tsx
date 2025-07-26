import Image from "next/image";

export default function Hive() {
  const projectData = {
    technologies: ["Typescript", "Python", "Firebase", "Electron-Vite"],
    details: [
      "Cross-platform desktop application",
      "Select multiple AI agents to assist with tasks",
      "Invite numerous team members to collaborate",
      "Work with AI",
      "Organize and manage projects, each with its own integrated environment and problem statement",
    ],
  };

  return (
    <div className="space-y-6">
      <div>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/hive/logo.png`}
          alt="SightTrack application screenshot"
          width={300}
          height={200}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-semibold text-white">Hive</h2>
          <p
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-gray-300 no-underline"
            style={{ textDecoration: "none" }}
          >
            Stealth
          </p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-gray-400">2025-Present</span>
          <span className="text-sm px-2 py-1 rounded-full bg-blue-900/30 text-blue-400 border border-blue-800">
            Ongoing
          </span>
        </div>
      </div>

      <p className="text-lg leading-relaxed text-gray-300">
        A collaboration platform that allows teams of any size to work together
        with AI to solve problems, brainstorm ideas, and manage projects. Teams
        can use specialized AI agents relevant to their tasks and track the
        chain of thought before arriving at a solution.
      </p>

      <div>
        <h3 className="text-lg font-medium text-white mb-3">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2">
          {projectData.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-white mb-3">Key Features</h3>
        <ul className="space-y-2">
          {projectData.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">•</span>
              <span className="text-gray-300">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-medium text-white mb-3">Preview</h3>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/hive/dashboard.png`}
          alt="Hive application dashboard"
          width={600}
          height={300}
          className="rounded-lg shadow-lg"
          priority
        />
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/hive/create.png`}
          alt="Hive application create new project"
          width={600}
          height={300}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
}
