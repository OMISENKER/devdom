import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="grid grid-cols-5 w-1/2 gap-6 items-center justify-center">
          <div className="col-span-2 flex items-center justify-center relative">
            {/* <div className="absolute mr-8 z-10 h-[355px] w-[235px] rounded-3xl bg-gradient-to-br from-[#5bf343] to-[#c705c1] blur-2xl"/> */}
            <Image src="/images/portrait-1.jpg" alt="Profile" width={315} height={395} className="rounded-3xl z-20"/>
          </div>
          <div className="col-span-3 flex flex-col items-start justify-start">
            <p className="font-nunito text-lg font-regular ml-1">
              Hi I{"'"}m,
            </p>
            <h1 className="font-ocra text-4xl font-bold mt-2">
              Dominique Eclavia
            </h1>
            <p className="font-nunito text-lg font-regular mt-4 ml-1">
              A NextJS and MERN Full-Stack Web Developer with over a year of combined work and organizational experience.
              </p>
              <p className="font-nunito text-lg font-regular mt-12">
                Connect with me:
              </p>
              <div className="flex mt-2 gap-6">
                <Link href="mailto:dominiquealvarez8888@gmail.com" target="_blank">
                <Image src="/assets/contacts1.png" alt="Gmail" width={40} height={40} className="aspect-square"/> 
                </Link>
                <Link href="https://github.com/OMISENKER" target="_blank">
                <Image src="/assets/contacts2.png" alt="Github" width={40} height={40} className="aspect-square"/>
                </Link>
                <Link href="https://www.linkedin.com/in/dominique-eclavia" target="_blank">
                <Image src="/assets/contacts3.png" alt="Linkedin" width={40} height={40} className="aspect-square"/>
                </Link>
              </div>
          </div>
        </div>
      </div>
    );
  }