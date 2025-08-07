import BackButton from "../ui/BackButton";
import ExpandableImage from "../components/ExpandableImage";
import Image from "next/image";
import Link from "next/link";
import MLVideos from "./components/MLVideos";

export default function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <div className="relative flex items-center justify-center mb-12">
          <BackButton className="absolute left-0" />
          <h1 className="text-4xl md:text-4xl font-bold">About Me</h1>
        </div>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg leading-relaxed">
            I&apos;m a highly motivated student and passionate developer with a
            strong foundation in technology and a strong interest in building
            impactful applications. I bring a thoughtful, collaborative mindset
            to every project and continuously seek to expand my skills through
            experience and learning. With my adaptability, attention to detail,
            and drive to contribute, I&apos;ll be a valuable asset to any team.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center h-20 w-32">
                <Image
                  src="/organizations/appleby.png"
                  alt="Appleby College"
                  width={128}
                  height={80}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  Appleby College
                </h3>
                <p className="text-gray-600 mt-1">High School</p>
                <p className="text-gray-500 text-sm mt-2">
                  Activities: Robotics, student council, tennis, STEM
                  distinction diploma
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Passions & Interests</h2>
          <div className="max-w-3xl mx-auto text-left">
            <ul className="space-y-6 text-lg">
              <li className="group p-4 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-md cursor-pointer min-h-[4rem]">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                    •
                  </span>
                  <div className="flex-1">
                    <span className="font-medium group-hover:text-white transition-colors duration-300">
                      Software development
                    </span>
                    <p className="text-gray-300 text-sm mt-2 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      Experienced with building full-stack applications with
                      modern frameworks like React, Next.js, and Python.
                      I&apos;m also proficient at mobile app development, where
                      I designed and developed numerous apps using the Flutter
                      framework.
                    </p>
                    <div className="mt-4 max-h-0 overflow-hidden group-hover:max-h-[40rem] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                        <div className="aspect-[9/20] bg-gray-700 rounded-lg overflow-hidden">
                          <ExpandableImage
                            src="/about_me/software_development/1.png"
                            alt="Software Development Project 1"
                            width={180}
                            height={320}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="aspect-[9/20] bg-gray-700 rounded-lg overflow-hidden">
                          <ExpandableImage
                            src="/about_me/software_development/2.png"
                            alt="Software Development Project 2"
                            width={180}
                            height={320}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="aspect-[9/20] bg-gray-700 rounded-lg overflow-hidden">
                          <ExpandableImage
                            src="/about_me/software_development/3.png"
                            alt="Software Development Project 3"
                            width={180}
                            height={320}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group p-4 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-md cursor-pointer min-h-[4rem]">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                    •
                  </span>
                  <div className="flex-1">
                    <span className="font-medium group-hover:text-white transition-colors duration-300">
                      Robotics
                    </span>
                    <p className="text-gray-300 text-sm mt-2 max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      I&apos;ve actively participated in VEX robotics
                      competitions, where I worked on various aspects of the
                      robot and designed autonomous systems. I first began on
                      Team 2055A where I was responsible for strategy and
                      coding. Currently, I serve as the lead programmer for team
                      540W.
                    </p>
                    <div className="mt-4 max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                          <ExpandableImage
                            src="/about_me/robotics/1.png"
                            alt="Robotics project 1"
                            width={200}
                            height={150}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                          <ExpandableImage
                            src="/about_me/robotics/2.png"
                            alt="Robotics project 2"
                            width={200}
                            height={150}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                          <video
                            src="/about_me/robotics/3.MOV"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group p-4 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-md cursor-pointer min-h-[4rem]">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                    •
                  </span>
                  <div className="flex-1">
                    <span className="font-medium  group-hover:text-white transition-colors duration-300">
                      Machine learning and artificial intelligence
                    </span>
                    <p className="text-gray-300 text-sm mt-2 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      I&apos;m passionate about exploring topics such as neural
                      networks, computer vision, and natural language processing
                      to solve complex problems and create intelligent
                      applications. I&apos;m also investigating applications of
                      retrieval-augmented generation and its integration with
                      knowledge graphs.
                    </p>
                    <div className="mt-4 max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                      <MLVideos />
                    </div>
                  </div>
                </div>
              </li>
              <li className="group p-4 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-md cursor-pointer min-h-[4rem]">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                    •
                  </span>
                  <div className="flex-1">
                    <span className="font-medium group-hover:text-white transition-colors duration-300">
                      Technological innovation
                    </span>
                    <p className="text-gray-300 text-sm mt-2 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      I&apos;m interested in 3D printing, IoT, and other
                      emerging technologies.
                    </p>
                    <div className="mt-4 max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                          <ExpandableImage
                            src="/about_me/tech_innovation/1.png"
                            alt="3D prototype 1"
                            width={200}
                            height={150}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                          <ExpandableImage
                            src="/about_me/tech_innovation/2.png"
                            alt="3D prototype 2"
                            width={200}
                            height={150}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                          <ExpandableImage
                            src="/about_me/tech_innovation/3.jpeg"
                            alt="3D prototype 3"
                            width={200}
                            height={150}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                          <ExpandableImage
                            src="/about_me/tech_innovation/4.jpeg"
                            alt="3D prototype 4"
                            width={200}
                            height={150}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group p-4 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-md cursor-pointer min-h-[4rem]">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                    •
                  </span>
                  <div className="flex-1">
                    <span className="font-medium  group-hover:text-white transition-colors duration-300">
                      Problem-solving
                    </span>
                    <p className="text-gray-300 text-sm mt-2 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      Breaking down complex challenges into manageable
                      components and developing systematic approaches to find
                      effective solutions.
                    </p>
                  </div>
                </div>
              </li>
              <li className="group p-4 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-md cursor-pointer min-h-[4rem]">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                    •
                  </span>
                  <div className="flex-1">
                    <span className="font-medium group-hover:text-white transition-colors duration-300">
                      Finding solutions to everyday challenges
                    </span>
                    <p className="text-gray-300 text-sm mt-2 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      Identifying pain points in daily life and creating
                      practical applications and tools that make processes more
                      efficient and user-friendly.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-15 text-center">
          <h2 className="text-2xl font-semibold mb-6">Associated With</h2>
          <div className="max-w-4xl mx-auto overflow-hidden carousel-container">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://hackja.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/hackja.png"
                    alt="HackJA"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://hir.harvard.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/hir.png"
                    alt="HIR"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://inova.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/inova.png"
                    alt="Inova"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://www.intel.com/content/www/us/en/corporate/artificial-intelligence/impact-festival.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/intel.jpg"
                    alt="Intel"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://nyas.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/nyas.png"
                    alt="NYAS"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://uwaterloo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/waterloo.jpg"
                    alt="University of Waterloo"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://www.vexrobotics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/vex.png"
                    alt="VEX Robotics"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://hackja.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/hackja.png"
                    alt="HackJA"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://hir.harvard.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/hir.png"
                    alt="HIR"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://inova.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/inova.png"
                    alt="Inova"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://www.intel.com/content/www/us/en/corporate/artificial-intelligence/impact-festival.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/intel.jpg"
                    alt="Intel"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://nyas.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/nyas.png"
                    alt="NYAS"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://uwaterloo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/waterloo.jpg"
                    alt="University of Waterloo"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-16 w-32 mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110">
                <Link
                  href="https://www.vexrobotics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/organizations/vex.png"
                    alt="VEX Robotics"
                    width={96}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
