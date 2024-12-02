import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="w-full h-screen py-8 px-4 md:px-8 flex flex-col items-center overflow-hidden">
      <h2 className="text-xl font-ocra font-bold mb-6 mt-8 md:mt-12 text-center">- Some of my Projects -</h2>
      
      <div className="w-full flex-1 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-start justify-start overflow-y-auto overflow-x-hidden max-w-6xl md:pt-4">
        {/* ATS Project */}
        <div className="w-full md:w-1/2 shrink-0">
          <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-4 md:p-5">
              <Link href="https://neoats-applicant.vercel.app/" target="_blank">
                <h3 className="text-lg md:text-xl font-ocra font-bold mb-2 text-white hover:underline">
                  AI-driven Applicant Tracking System
                </h3>
              </Link>
              
              <div className="mb-3">
                <Link href="https://neoats-hr-react.vercel.app/login" target="_blank">
                  <p className="text-xs md:text-sm text-red-300 hover:underline">
                    Finished & Deployed | Currently on-hold for acquisition
                  </p>
                </Link>
              </div>
              
              {/* Project Image */}
              <div className="bg-zinc-800 h-24 md:h-32 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                <Link href="https://neoats-applicant.vercel.app/" target="_blank">
                  <Image 
                    src="/images/ats.png" 
                    alt="Project Image" 
                    width={500} 
                    height={500} 
                    className="w-full h-full object-cover rounded-lg" 
                  />
                </Link>
              </div>
              
              {/* Project Description */}
              <div className="text-zinc-300 space-y-1.5">
                <p className="text-sm md:text-base">HR Applicant Tracking System:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 text-xs md:text-sm">
                  <li>A WebApp that allows HR to track and manage the hiring process.</li>
                  <li>AI-powered Candidate Scorer.</li>
                  <li>Has an HR side and an Applicant side.</li>
                  <li>Interview scheduling.</li>
                  <li>Complete hiring pipeline from job posting, AI candidate scoring, interview scheduling, to hiring.</li>
                </ul>
              </div>
              
              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-zinc-800 rounded-full text-xs md:text-sm text-zinc-300">MERN</span>
                <span className="px-2.5 py-1 bg-zinc-800 rounded-full text-xs md:text-sm text-zinc-300">OpenAI API</span>
                <span className="px-2.5 py-1 bg-zinc-800 rounded-full text-xs md:text-sm text-zinc-300">MongoDB</span>
                <span className="px-2.5 py-1 bg-zinc-800 rounded-full text-xs md:text-sm text-zinc-300">Google</span>
              </div>
            </div>
          </div>
        </div>

        {/* DevJourney Project */}
        <div className="w-full md:w-1/2 shrink-0">
          <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-4 md:p-5">
              <Link href="https://github.com/OMISENKER/my-developer-journey" target="_blank">
                <h3 className="text-lg md:text-xl font-ocra font-bold mb-2 text-white hover:underline">
                  MyDevJourney WebApp - NextJS + MongoDB
                </h3>
              </Link>
              
              <div className="mb-3">
                <Link href="https://drive.google.com/file/d/1jEO6I6FzqrUZ7C12nTCZdKSfeI9aGr7u/view?usp=sharing" target="_blank">
                  <p className="text-xs md:text-sm text-emerald-500 hover:underline">
                    Early stages | Hackathon Winning WebApp!
                  </p>
                </Link>
              </div>
              
              {/* Project Video */}
              <div className="bg-zinc-800 h-24 md:h-32 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/videos/devjourney.webm" type="video/webm" />
                </video>
              </div>
              
              {/* Project Description */}
              <div className="text-zinc-300 space-y-1.5">
                <p className="text-sm md:text-base">Inspired by Duolingo&apos;s day streaks and YT Music Recap:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 text-xs md:text-sm">
                  <li>A Web App where Developers with any experience can Sign-in using GitHub OAuth to set their developer goals and track their daily learnings.</li>
                  <li>They will get Developer Recap which will give them insights if they are pushing toward their goals.</li>
                  <li>Their Daily goal streaks would also be counted.</li>
                  <li>All data would be sourced from their GitHub account.</li>
                </ul>
              </div>
              
              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-zinc-800 rounded-full text-xs md:text-sm text-zinc-300">Next.js</span>
                <span className="px-2.5 py-1 bg-zinc-800 rounded-full text-xs md:text-sm text-zinc-300">MongoDB</span>
                <span className="px-2.5 py-1 bg-zinc-800 rounded-full text-xs md:text-sm text-zinc-300">GitHub OAuth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}