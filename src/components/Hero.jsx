import heroImg from "../assets/hero12.png";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h6 className="text-3xl font-bold tracking-wider text-slate-800">
            Hi, I'm <span className="text-emerald-600">Rahul Luthra</span> 👋
          </h6>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            I craft intelligent web solutions fueled by data & automation.
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            From concept to code – I turn your business ideas into dynamic
            digital products.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/rahulapps29"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/rahulluthra21"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://twitter.com/rahulluthra"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img
            src={heroImg}
            alt="Rahul Luthra"
            className="h-80 lg:h-96 rounded-xl shadow-lg"
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
