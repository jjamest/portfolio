import Image from "next/image";

export default function ApiLogger() {
  const projectData = {
    technologies: ["Python", "HTML", "Javascript"],
    details: [
      "Easy to set up and use out of the box",
      "Access and create logs on any device on the same network",
      "Provides basic functionality, but easy to add plugins",
      "Stores logs between sessions, with a way to clear them",
    ],
  };

  return (
    <div className="space-y-6">
      <div>
        <Image
          src="/projects/apiLogger/logo.png"
          alt="SightTrack application screenshot"
          width={300}
          height={200}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-semibold text-white">API Logger</h2>
          <a
            href="https://github.com/jjamest/api-logger"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-gray-300 no-underline"
            style={{ textDecoration: "none" }}
          >
            GitHub
          </a>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-gray-400">2025</span>
        </div>
      </div>

      <p className="text-lg leading-relaxed text-gray-300">
        An solution to situations where native debugging through logs
        aren&apos;t feasible, such as in robotics or mixed reality applications.
        These setups often require additional hardware or software to capture
        necessary logs, which can be cumbersome and inefficient. API Logger
        simplifies this process by providing an efficient way to log and access
        data from various sources, making it easier to debug and analyze
        performance in real-time.
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
        <h3 className="text-lg font-medium text-white mb-3">Demo</h3>
        <video
          src="/projects/apiLogger/demo.mov"
          autoPlay
          loop
          muted
          controls
          className="w-full max-w-2xl rounded-lg shadow-lg"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
