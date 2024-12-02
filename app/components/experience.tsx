import Link from "next/link";

export default function Experience() {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center text-xl">
        <div className="flex flex-col items-center justify-center mt-8">
        <p className="font-ocra mb-6">- Past Positions -</p>
        <div className="grid grid-cols-2 gap-2 mb-4 mr-20"> 
          <div className="col-span-1">
          <p className="font-ocra text-end">Work:</p>
          </div>
          <div className="col-span-1">
          <div className=" flex gap-2">
            <div className="flex flex-col items-start">
              <p className="font-ocra">Web Developer @</p>
              <Link href="https://carislemedia.com/" target="_blank"><p className="font-ocra underline">Carisle Media</p></Link>
              <p className="font-nunito font-light text-sm mt-2">2023</p>
              <p className="text-base">Developed:</p>
              <ul className="text-base list-disc list-inside">
                <li>HR Applicant Tracking System</li>
                <li>C.E.O.&apos;s professional website</li>
                <li>Carisle Media&apos;s company website.</li>
              </ul>
            </div>
          </div>
          </div>
        </div><div className="grid grid-cols-2 gap-2 mr-20"> 
          <div className="col-span-1">
          <p className="font-ocra text-end">Org.:</p>
          </div>
          <div className="col-span-1">
          <div className=" flex gap-2">
           
            <div className="flex flex-col items-start">
              <p className="font-ocra">Full-Stack Developer,<br />Front-End lead @</p>
              <Link href="https://alpha-sti.vercel.app/" target="_blank"><p className="font-ocra underline">Alliance of <br /> Leading Programmers</p></Link>
              <p className="font-nunito font-light text-sm mt-2">2023 - 2024</p>
              <p className="text-base">Led a team of 10 developers to develop:</p>
              <ul className="text-base list-disc list-inside">
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