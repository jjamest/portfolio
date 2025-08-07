"use client";

import { useState } from "react";
import BackButton from "../ui/BackButton";
import SightTrack from "./components/SightTrack";
import Hive from "./components/Hive";
import ConnectEd from "./components/ConnectEd";
import ApiLogger from "./components/ApiLogger";
import HoloVision from "./components/HoloVision";
import NutritionAssistent from "./components/NutritionAssistent";

const projectsData = {
  sighttrack: {
    title: "SightTrack",
    component: SightTrack,
  },
  hive: {
    title: "Hive",
    component: Hive,
  },
  connectEd: {
    title: "ConnectEd",
    component: ConnectEd,
  },
  apiLogger: {
    title: "API Logger",
    component: ApiLogger,
  },
  holovision: {
    title: "HoloVision",
    component: HoloVision,
  },
  nutritionAssistent: {
    title: "Nutrition Assistent",
    component: NutritionAssistent,
  },
};

export default function ExperiencePage() {
  const [activeProject, setActiveProject] =
    useState<keyof typeof projectsData>("sighttrack");

  const projectKeys = Object.keys(projectsData) as Array<
    keyof typeof projectsData
  >;

  const currentProject = projectsData[activeProject];
  const CurrentProjectComponent = currentProject.component;

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <div className="relative flex items-center justify-center mb-12">
          <BackButton className="absolute left-0" />
          <h1 className="text-4xl md:text-4xl font-bold">Projects</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-64 lg:flex-shrink-0">
            <nav>
              <ul className="space-y-4">
                {projectKeys.map((projectKey) => (
                  <li key={projectKey}>
                    <button
                      onClick={() => setActiveProject(projectKey)}
                      className={`text-left transition-colors duration-200 ${
                        activeProject === projectKey
                          ? "text-white font-medium"
                          : "text-gray-400 hover:text-gray-300"
                      }`}
                    >
                      {projectsData[projectKey].title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <CurrentProjectComponent />
          </main>
        </div>
      </div>
    </div>
  );
}
