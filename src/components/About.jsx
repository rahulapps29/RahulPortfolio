import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section
      className="bg-gradient-to-br from-white to-slate-100 py-24"
      id="about"
    >
      <div className="align-element grid md:grid-cols-2 items-center gap-12">
        <img
          src={aboutSvg}
          alt="About Rahul Luthra"
          className="w-full max-h-80 object-contain drop-shadow-lg"
        />

        <article>
          <SectionTitle text="Code. Coffee. Rahul Luthra." />
          <p className="text-slate-700 mt-6 leading-loose text-lg">
            I'm Rahul Luthra — a passionate full-stack developer and digital
            problem-solver. I turn complex ideas into intelligent, interactive
            web applications. Whether it’s integrating automation or building
            seamless UIs, I believe in writing code that’s not just functional,
            but thoughtful.
          </p>

          <ul className="mt-6 space-y-3 text-slate-600 font-medium">
            <li>☕ Addicted to clean code and a good cup of coffee</li>
            <li>
              📊 Skilled in data automation, APIs, and analytics workflows
            </li>
            <li>💻 Crafting full-stack apps with real-world performance</li>
            <li>🚀 Always scaling, always optimizing</li>
          </ul>

          <p className="text-slate-500 mt-8 text-sm italic">
            I don’t just build apps — I build solutions with heart and hustle.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
