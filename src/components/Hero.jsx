<<<<<<< HEAD
// import ParticleBg from './ParticleBg';
=======
import React from 'react';
>>>>>>> b330d2a7a84fe954cb6c00a2e0f2f76f63db6c17
import HeroImg from "/images/hero.png";
import heroBg from "/images/herobg.png";

const Hero = () => {
  return (
<<<<<<< HEAD
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
=======
    
    <div className='relative overflow-y-hidden h-screen bg-gray-900'>
{/* <div className='w-1/3 h-96 absolute p-10  rounded-r-full rounded-b-full glowing-blur top-[-10px] left-[-90px]' style={{ background: 'rgb(95,123,128)', backgroundImage: 'linear-gradient(73deg, rgba(95,123,128,1) 0%, rgba(131,167,173,1) 100%)'}}>
  h
</div> */}
<img src={heroBg}/>
    <div className='absolute right-10 top-24 max-sm:hidden'>
        <img src={HeroImg} alt=""/>
    </div>
    <div className='top-1/3 lg:left-20 absolute p-2 lg:w-1/2'>
        <div className='py-2 pl-3'>
            <h1 className='text-hack'>HACK OVERFLOW</h1>
            <p className='text-body'>Hackoverflow hackathon lorem ipsum doler amet, best hackathon. participate and be the best developer. Hackoverflow hackathon lorem ipsum doler amet, best hackathon. participate and be the best developer</p>
        <div className='flex gap-4 mt-10'>
        <button className='roadmap-button'>Check Roadmap</button>
        <button className='regest-button'>Register</button>
        </div>
>>>>>>> b330d2a7a84fe954cb6c00a2e0f2f76f63db6c17
        </div>
      </div>
    </div>
  );
};

export default Hero;
