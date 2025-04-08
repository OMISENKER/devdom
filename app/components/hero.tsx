import { HiArrowNarrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <div className="relative h-full w-full pointer-events-none flex items-center justify-center bg-[url('/assets/grid.png')] bg-no-repeat bg-cover bg-end">
      <h1 className="text-lg md:text-3xl font-ocra font-bold z-30 mt-40 md:mt-48">
        Full-Stack Web Developer
      </h1>
      <div className="absolute mt-20 z-40 bottom-14 md:bottom-10 animate-pulse flex flex-col items-center gap-1">
        <HiArrowNarrowDown />
        <p className="text-md font-ocra">scroll down</p>
      </div>

      <div className="absolute z-10 h-full w-full  bg-black opacity-85" />
      <div className="absolute z-10 h-1/2 w-2/3 rounded-full bg-black opacity-90 blur-3xl" />
    </div>
  );
}
