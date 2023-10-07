import { motion } from "framer-motion";

const Teams = () => {
return (
    <div className="pri-comp lg:px-[4rem] lg:py-[4rem]">

    <div className="hero-text lg:py-[3rem]">
        <h1>TEAMS</h1>   
    </div>

    <div className="">

    <motion.button
          className="play-butt lg:h-[250px] lg:w-[350px] h-40 w-52 py-[2rem] px-[2rem] mx-[3rem] my-[3rem]"
        >
        </motion.button>

        <motion.button
        className="play-butt lg:h-[250px] lg:w-[350px] h-40 w-52 py-[2rem] px-[2rem] mx-[3rem] my-[3rem]"
      >
      </motion.button>

      <motion.button
      className="play-butt lg:h-[250px] lg:w-[350px] h-40 w-52 py-[2rem] px-[2rem] mx-[3rem] my-[3rem]"
    >
    </motion.button>
    </div>
    </div>
);
}
export default Teams;