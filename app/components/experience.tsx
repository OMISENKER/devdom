import Link from "next/link";

export default function Experience() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-base md:text-lg lg:text-xl px-4 md:px-0">
      <div className="flex flex-col items-center justify-center mt-8 w-full max-w-2xl">
        <p className="font-ocra mb-6 text-lg md:text-xl">- Past Positions -</p>

        {/* Work Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 w-full md:mr-20">
          <div className="col-span-1 text-center md:text-end mb-0">
            <p className="font-ocra">Work:</p>
          </div>
          <div className="col-span-1">
            <div className="flex gap-2 justify-center md:justify-start">
              <div className="flex flex-col items-center md:items-start">
                <p className="font-ocra text-xl">Web Developer @</p>
                <Link href="https://carislemedia.com/" target="_blank">
                  <p className="font-ocra underline">Carisle Media</p>
                </Link>
                <p className="font-nunito font-light text-sm  mt-2">2023</p>
                <p className="text-base md:text-base mt-2">Developed:</p>
                <ul className="text-base text-center md:text-left  md:text-base list-disc list-inside">
                  <li>HR Applicant Tracking System</li>
                  <li>C.E.O.&apos;s professional website</li>
                  <li>Carisle Media&apos;s company website.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Organizational Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:mr-20">
          <div className="col-span-1 text-center md:text-end mb-0 ">
            <p className="font-ocra">Org.:</p>
          </div>
          <div className="col-span-1">
            <div className="flex gap-2 justify-center md:justify-start">
              <div className="flex flex-col items-center md:items-start">
                <p className="font-ocra text-center md:text-left text-xl">
                  Full-Stack Developer &
                  <br />
                  Front-End lead @
                </p>
                <Link href="https://alpha-sti.vercel.app/" target="_blank">
                  <p className="font-ocra underline text-center md:text-left">
                    Alliance of <br /> Leading Programmers
                  </p>
                </Link>
                <p className="font-nunito font-light text-sm mt-2">
                  2023 - 2024
                </p>
                <p className="text-base mt-2">
                  Led a team of 10 developers to develop:
                </p>
                <ul className="text-base text-center md:text-left list-disc list-inside">
                  <li>Organization&apos;s website</li>
                  <li>Event Registration website</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
