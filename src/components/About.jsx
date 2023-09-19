import AboutTimeline from "./AboutTimeline";
import 'boxicons';

const Arrow = () =>{
  return(
    <box-icon name='play' color='#ffffff' size='md' ></box-icon>
  );
};
const About = () => {
  return (
    <div className="bg-[#070213] w-full min-h-screen flex bg-[url('../public/images/StarsStart.png')]  text-white ">
      <div className="w-1/2 flex flex-col gap-[5rem] px-[8rem] py-[4rem]">
        <div className="">
          <h2 className="text-about">About Us</h2>
          <p className="text-para">
            Hackoverflow hackathon lorem ipsum doler amet, best hackathon.
            participate and be the best developer. Hackoverflow hackathon lorem
            ipsum doler amet, best hackathon. participate and be the best
            developer
          </p>
        </div>
        <button className="play-butt">
          <Arrow />  <span>Play</span>
        </button>
      </div>
      <div className="w-1/2 aboutTimeline bg-[url('../public/images/Vector3.png')] bg-no-repeat bg-center bg-cover">
        <AboutTimeline />
      </div>
    </div>
  );
};

export default About;
