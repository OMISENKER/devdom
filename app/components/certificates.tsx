import Image from "next/image";
import Link from "next/link";

export default function Certificates() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <p className="font-ocra text-2xl font-regular">- Connect with me -</p>
      <div className="flex mt-2 gap-4 md:gap-6">
        <Link href="mailto:dominiquealvarez8888@gmail.com" target="_blank">
          <Image
            src="/assets/contacts1.png"
            alt="Gmail"
            width={40}
            height={40}
            className="w-8 md:w-10 h-auto aspect-square"
          />
        </Link>
        <Link href="https://github.com/OMISENKER" target="_blank">
          <Image
            src="/assets/contacts2.png"
            alt="Github"
            width={40}
            height={40}
            className="w-8 md:w-10 h-auto aspect-square"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/dominique-eclavia"
          target="_blank"
        >
          <Image
            src="/assets/contacts3.png"
            alt="Linkedin"
            width={40}
            height={40}
            className="w-8 md:w-10 h-auto aspect-square"
          />
        </Link>
      </div>
    </div>
  );
}
