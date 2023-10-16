import AboutTimeline from "./AboutTimeline";
import "boxicons";
import { motion } from "framer-motion";
import stars from "../assets/new_assets/reso/Stars-AboutUs.png";

const Arrow = () => {
  return <box-icon name="play" color="#ffffff" size="md"></box-icon>;
};

const timelineAnimation = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, transition: { duration: 0.7 }, y: 0 },
};

const About = () => {
  return (
    <div
      className={`bg-[#070213] bg-stars w-full relative lg:min-h-screen flex bg-center h-fit bg-cover bg-repeat-y text-white flex-col lg:flex-row`}
    >
      {/* <div className="absolute left-0  w-full h-full top-0">
        <img src={stars} className="h-full object-cover" loading="eager" />
      </div> */}
      <div className="lg:w-1/2 z-10 flex flex-col gap-[5rem] items-center md:px-[8rem] py-[4rem]">
        <div className="text-center lg:text-left p-4">
          <motion.h2
            className="text-[48px] font-[300]"
            variants={timelineAnimation}
            initial="initial"
            whileInView="animate"
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-[16px] mt-[50px]"
            variants={timelineAnimation}
            initial="initial"
            whileInView="animate"
          >
            Hackoverflow hackathon lorem ipsum doler amet, best hackathon.
            participate and be the best developer. Hackoverflow hackathon lorem
            ipsum doler amet, best hackathon. participate and be the best
            developer
          </motion.p>
        </div>
        <motion.button
          className="play-butt lg:h-[300px] lg:w-[500px] h-40 w-52"
          variants={timelineAnimation}
          initial="initial"
          whileInView="animate"
        >
          <Arrow /> <span>Play</span>
        </motion.button>
      </div>
      <div className="lg:w-1/2 aboutTimeline lg:bg-[url('../public/images/Vector3.png')] flex items-center justify-center bg-no-repeat bg-center bg-cover">
        <AboutTimeline />
      </div>
    </div>
  );
};

export default About;
