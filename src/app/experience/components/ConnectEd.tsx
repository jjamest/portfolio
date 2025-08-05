import Image from "next/image";

export default function ConnectEd() {
  const projectData = {
    technologies: ["Flutter/Dart", "Firebase", "Javascript"],
    details: [
      "Easily access day to day schedules ~20x faster than native school portals",
      "Preview lunch menus",
      "View sports game schedules and scores",
      "See upcoming assignments and deadlines",
      "Comprehensive school calendar for all events",
    ],
  };

  return (
    <div className="space-y-6">
      <div>
        <Image
          src="/projects/connectEd/logo.png"
          alt="SightTrack application screenshot"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-semibold text-white">ConnectEd</h2>
          <a
            href="https://apps.apple.com/us/app/connect-ed/id6480289348"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-gray-300 no-underline"
            style={{ textDecoration: "none" }}
          >
            App Store
          </a>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-gray-400">2024-Present</span>
          <span className="text-sm px-2 py-1 rounded-full bg-blue-900/30 text-blue-400 border border-blue-800">
            Ongoing
          </span>
        </div>
      </div>

      <p className="text-lg leading-relaxed text-gray-300">
        A mobile application designed to improve the student experience. It
        serves as an alternative to other school portals in that students can
        access their needs with efficiency. With it&apos;s intuitive and
        innovative design, ConnectEd allows you to access day schedules, sports
        games, and school assignments anywhere.
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
    </div>
  );
}
