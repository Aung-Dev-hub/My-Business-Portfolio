import Typewriter from "typewriter-effect";

export default function AnimatedIntro() {
  return (
    <div data-aos="fade-up" data-aos-delay="200" className="text-lg sm:text-2xl h-30 px-8 text-center font-medium text-gray-400">
      <span className=" from-purple-500 via-violet-500 to-fuchsia-500 animate-gradient font-bold">
        <Typewriter
          options={{
            strings: [
              "Fullstack Developer",
              "React Export",
              "Problem Solver",
              "UI/UX Designer",
            ],
            autoStart:true,
            loop:true,
            delay:75,
            deleteSpeed:50,
            wrapperClassName:"inline-block py-6"
          }}
        />
      </span>
    </div>
  );
}
