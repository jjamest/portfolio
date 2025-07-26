import Image from "next/image";

export default function NutritionAssistent() {
  const projectData = {
    technologies: ["Python"],
    details: [
      "Easy to use and add document sources",
      "Globally aware contextual search",
      "Factual based answers",
      "Ran locally without OpenAI or Azure API keys",
    ],
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-semibold text-white">
            Nutrition Assistent
          </h2>
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
        A GraphRAG based AI assistant that can answer questions about nutrition
        based on scientific papers and documents. It allows users to easily add
        document sources and provides globally aware contextual search for
        factual based answers. The assistant runs locally with Llama3.1 8B
        parameters.
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
          Data Processer Demo
        </h3>
        <Image
          src="/projects/nutritionAssistent/code.png"
          alt="Hive application dashboard"
          width={600}
          height={300}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
}
