import Image from "next/image";

export default function HoloVision() {
  const projectData = {
    technologies: ["Unity", "MRTK3", "C#", "Typescript"],
    details: [
      "3D DICOM CT Scan viewer and visualization tool",
      "Help with surgical planning and education",
      "Manipulate, cut, and slice 3D models",
      "Preprocesser to load models and build externally, without having to manually build in Unity and Visual Studio",
      "Hands on experience with mixed reality and augmented reality",
    ],
  };

  return (
    <div className="space-y-6">
      <div>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/holovision/icon.png`}
          alt="SightTrack application screenshot"
          width={300}
          height={200}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-semibold text-white">HoloVision</h2>
          <div className="flex items-center gap-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/holovision/inova.png`}
              alt="Inova logo"
              width={16}
              height={16}
              className="rounded-sm"
            />
            <p
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-gray-300 no-underline"
              style={{ textDecoration: "none" }}
            >
              Inova
            </p>
          </div>
        </div>
      </div>

      <p className="text-lg leading-relaxed text-gray-300">
        A hololens application and loader for viewing interactive 3D models and
        CT scans. Allows manipulating these models for surgical planning and
        education. Built with Unity and MRTK3, it provides hands-on experience
        with mixed reality and augmented reality technologies.
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
