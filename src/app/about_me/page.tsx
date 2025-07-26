import BackButton from "../ui/BackButton";
import Image from "next/image";

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
          <h2 className="text-2xl font-semibold mb-6">Passions & Interests</h2>
          <div className="max-w-2xl mx-auto text-left">
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Software development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Robotics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Machine learning and artificial intelligence</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Technological innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Problem-solving</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">•</span>
                <span>Finding solutions to everyday challenges</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-15 text-center">
          <h2 className="text-2xl font-semibold mb-6">Associated With</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center h-16 w-24 transition-all duration-300 hover:scale-110">
              <Image
                src="/organizations/hackja.png"
                alt="HackJA"
                width={96}
                height={64}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24 transition-all duration-300 hover:scale-110">
              <Image
                src="/organizations/hir.png"
                alt="HIR"
                width={96}
                height={64}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24 transition-all duration-300 hover:scale-110">
              <Image
                src="/organizations/inova.png"
                alt="Inova"
                width={96}
                height={64}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24 transition-all duration-300 hover:scale-110">
              <Image
                src="/organizations/intel.jpg"
                alt="Intel"
                width={96}
                height={64}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24 transition-all duration-300 hover:scale-110">
              <Image
                src="/organizations/nyas.png"
                alt="NYAS"
                width={96}
                height={64}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-24 transition-all duration-300 hover:scale-110">
              <Image
                src="/organizations/waterloo.jpg"
                alt="University of Waterloo"
                width={96}
                height={64}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
