import Image from "next/image";

export default function SightTrack() {
  const projectData = {
    technologies: [
      "Flutter/Dart",
      "Python",
      "AWS",
      "Javascript",
      "PostgreSQL",
      "PostGIS",
      "Django",
    ],
    details: [
      "Intuitive mobile interface with world data visualization and analysis",
      "Geolocation services to view other sightings and add new ones",
      "Artificial intelligence to identify animal and plant species from images",
      "PostgreSQL PostGIS database for real-time GBIF data updates and data analysis",
      "Allow students to earn service hours by taking sightings",
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/sighttrack/sighttrack.png`}
          alt="SightTrack application screenshot"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-semibold text-white">SightTrack</h2>
          <a
            href="https://www.sighttrack.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-gray-300 no-underline"
            style={{ textDecoration: "none" }}
          >
            www.sighttrack.org
          </a>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-gray-400">2020-Present</span>
          <span className="text-sm px-2 py-1 rounded-full bg-blue-900/30 text-blue-400 border border-blue-800">
            Ongoing
          </span>
        </div>
      </div>

      <p className="text-lg leading-relaxed text-gray-300">
        A citizen science platform that allows users to monitor local
        neighbourhood biodiversity, contributing to a global database of
        wildlife observations. Working on large dataset analysis to recommend
        sampling locations to volunteers and provide personal suggestions based
        on their location and existing data.
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
        <h3 className="text-lg font-medium text-white mb-3">
          Data Visualization
        </h3>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/sighttrack/heatmap.png`}
          alt="SightTrack heatmap showing biodiversity data visualization"
          width={600}
          height={300}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
}
