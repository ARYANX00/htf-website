// import ParticleBg from './ParticleBg';
import HeroImg from "/images/hero.png";

const Hero = () => {
  return (
    <div className="relative bg-[#070213] overflow-y-hidden h-screen">
      {/* <ParticleBg/> */}
      <div className="absolute right-10 top-24 max-sm:hidden">
        <img src={HeroImg} alt="" />
      </div>
      <div className="top-1/3 lg:left-20 absolute p-2 lg:w-1/2">
        <div className="py-2 pl-3">
          <h1 className="text-hack">HACK OVERFLOW</h1>
          <p className="text-body">
            Hackoverflow hackathon lorem ipsum doler amet, best hackathon.
            participate and be the best developer. Hackoverflow hackathon lorem
            ipsum doler amet, best hackathon. participate and be the best
            developer
          </p>
          <div className="flex gap-4 mt-10">
            <button className="roadmap-button">Check Roadmap</button>
            <button className="regest-button">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
