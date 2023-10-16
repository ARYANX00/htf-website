import vector1 from "/images/vector.svg";
import vector3 from "/images/vector3.svg";
import chart1 from "/images/chart.svg";
import group19 from "/images/Group19.svg";
import reactSvg from "/images/react.svg";
import cup from "/images/cup.svg";

const TIM_TIM = () => {
  return (
    <div className="tim_tim">
      <div className="timeline">
        <h1>TIMELINE</h1>
      </div>

      <div className="stages">
        <div className="name-space">
          <h1>1</h1> <span>FIRST PHASE</span>
        </div>

        <div className="vect">
          <img src={vector1} alt="yes" />
        </div>

        <div className="sec-cont">
          <div className="name-space-sec">
            <h1>2</h1> <span>SECOND PHASE</span>
          </div>
        </div>

        <div className="cent-cont">
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            eaque, quidem id, necessitatibus porro illum blanditiis alias eos
            nesciunt quos facere cum distinctio quas labore consequuntur? Cum
            nesciunt natus enim.
          </span>

          <div className="graph-line">
            <div id="first-sec">
              <span>Theam Section</span>
            </div>
            <div id="second-sec">
              <span>Submition of projects</span>
            </div>
            <div id="third-sec">
              <span>
                End <br />
                21 october 2023
              </span>
            </div>
            <div className="graph-image">
              <img src={chart1} alt="" />
            </div>
          </div>

          <div className="side_line">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              magnam possimus odit, debitis, quisquam hic commodi eveniet beatae
              rem porro ullam veniam totam ipsam dolores perferendis molestiae
              minus. Porro.
            </span>

            <div className="eve_vec">
              <div className="team_sort">12 Team Shortlisted</div>
              <div className="group19">
                <img src={group19} alt="" />
              </div>
              <div className="date_eve">30th October,2023</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-container">
        <div className="vect-second">
          <img src={vector3} alt="yes" />
        </div>
      </div>

      <div className="third-container">
        <div className="name-space">
          <h1>3</h1> <span>LIVE CODING STAGE</span>
        </div>

        <div className="vect">
          <img src={vector1} alt="yes" />
        </div>

        <div className="name-space-sec">
          <h1>4</h1> <span>Announcement of winners</span>
        </div>
      </div>
      <div className="write_up">
        <p className="first-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          voluptate pariatur minima magnam autem? Quod earum at eius, et quia.
        </p>

        <p className="sec-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          voluptate pariatur minima magnam autem? Quod earum at eius, et quia.
        </p>
      </div>

      <div className="final-container">
        <div className="react">
          <div className="start-para">
            <p>Starts 10th Nov, 2023</p>
          </div>

          <div className="second-para">
            <p>In-Campus Accomodation</p>
          </div>

          <div className="reactimg">
            <img src={reactSvg} className="w-full" alt="" />
          </div>

          <div className="third-para">
            <p>Ends 13th Nov, 2023</p>
          </div>

          <div className="end-para">
            <p>final-container</p>
          </div>

          {/* cup */}
          <div className="cup-ui">
            <img src={cup} alt="" />

            <div className="prizes">
              <ul>
                <li>1st - 20,000</li>
                <li>2nd - 14,000</li>
                <li>3rd - 8,000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TIM_TIM;
