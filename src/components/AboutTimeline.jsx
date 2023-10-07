// eslint-disable-next-line no-unused-vars
import Timeline from "@mui/lab/Timeline";
// eslint-disable-next-line no-unused-vars
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { motion } from "framer-motion";

const Item = ({ title, date }) => {
  return (
    <div className="h-[15vh]">
      <h4 className=" text-[16px] uppercase">{title}</h4>
      <p className="text-[#9a9a9a] text-[14px]">{date}</p>
    </div>
  );
};

const timelineAnimation = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, transition: { duration: 0.7, delay: 0.3 }, y: 0 },
};

export default function AlternateReverseTimeline() {
  return (
    <Timeline position="alternate-reverse" className="h-[80vh] lg:ml-[15vw]">
      <motion.div
        variants={timelineAnimation}
        initial="initial"
        whileInView="animate"
        className=""
      >
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Item title={"hack overflow 1"} date={"2019"} />
          </TimelineContent>
        </TimelineItem>
      </motion.div>
      <motion.div
        variants={timelineAnimation}
        initial="initial"
        whileInView="animate"
      >
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Item title={"hack overflow 2"} date={"2020"} />
          </TimelineContent>
        </TimelineItem>
      </motion.div>
      <motion.div
        variants={timelineAnimation}
        initial="initial"
        whileInView="animate"
      >
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Item title={"hack overflow 3"} date={"2021"} />
          </TimelineContent>
        </TimelineItem>
      </motion.div>
      <motion.div
        variants={timelineAnimation}
        initial="initial"
        whileInView="animate"
      >
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Item title={"hack overflow 4"} date={"2022"} />
          </TimelineContent>
        </TimelineItem>
      </motion.div>
      <motion.div
        variants={timelineAnimation}
        initial="initial"
        whileInView="animate"
      >
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Item title={"hack overflow 5"} date={"2023"} />
          </TimelineContent>
        </TimelineItem>
      </motion.div>
    </Timeline>
  );
}
