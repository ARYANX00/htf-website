import secondPrize from "/images/second.png";
import firstPrize from "/images/entretiempos_badges-removebg 1.png";
import thirdPrize from "/images/third.png";

const AcompLish = () => {
  return (
    <div className="pri-comp">
      <div className="hero-text">
        <h1>PRIZES</h1>
      </div>
      <div className="pri_first">
        <div className="batch_2">
          <img className="second-bactch" src={secondPrize} alt="" />
          <div className="box-sec">
            <h3>SECOND</h3>
            <br />
            <br />
            <h3>₹20,000</h3>
          </div>
        </div>
      </div>

      <div className="pri_first">
        <div className="batch_1">
          <img className="first-bactch" src={firstPrize} alt="" />
          <div className="box-first">
            <h3>FIRST</h3>
            <br />
            <br />
            <h3>₹20,000</h3>
          </div>
        </div>
      </div>

      <div className="pri_first">
        <div className="batch_3">
          <img className="third-bactch" src={thirdPrize} alt="" />
          <div className="box-third">
            <h3>THIRD</h3>
            <br />
            <br />
            <h3>₹20,000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcompLish;
