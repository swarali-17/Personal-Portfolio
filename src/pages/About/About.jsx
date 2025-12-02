import HeroImg from "@/assets/images/hero.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Tech Enthusiast & Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Swarali Amrutkar, an undergraduate student and an upcoming software developer 
                with a strong interest in understanding how things work, solving complex problems, 
                and translating ideas into clean, functional solutions.
                <br /><br />
                <span className="font-bold text-white">
                  Recently, I completed my Software Engineering Internship at Google,
                </span>
                where I gained hands-on experience, collaborated with talented teams, and deepened 
                my love for building impactful products.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I’m constantly exploring new tools, concepts, and technologies to sharpen my skills 
                    and grow. I believe in continuous improvement, writing clean and thoughtful code, 
                    and approaching every challenge with a learner’s mindset.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Swarali Amrutkar
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
