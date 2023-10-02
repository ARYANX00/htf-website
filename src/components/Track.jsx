import  { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Track() {
  const [activeSection, setActiveSection] = useState(0);

  // Function to automatically switch to the next section
  const autoSwitchSection = () => {
    setActiveSection((prevActiveSection) => {
      const nextSection = (prevActiveSection + 1) % 5; // Assuming 2 sections, update as needed
      return nextSection;
    });
  };

  // Automatically switch sections every 6 seconds
  useEffect(() => {
    const interval = setInterval(autoSwitchSection, 6000); // 6000ms = 6 seconds

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);
  

  // CSS classes for section transitions
  const sectionClasses = (sectionIndex) => {
    if (sectionIndex === activeSection) {
      return "opacity-100 max-h-screen";
    } else if (
      (sectionIndex < activeSection && activeSection - sectionIndex === 1) ||
      (sectionIndex === 5 - 1 && activeSection === 0)
    ) {
      return "opacity-0 max-h-0";
    } else {
      return "opacity-0 max-h-0 hidden";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault(); // Prevent default scrolling behavior

      // Calculate the new active section based on the arrow key pressed
      setActiveSection((prevActiveSection) => {
        if (e.key === "ArrowDown") {
          return (prevActiveSection + 1) % 2; // Next section
        } else if (e.key === "ArrowUp") {
          // If the current section is the first, go to the last section; otherwise, go to the previous section
          return prevActiveSection === 0 ? 1 : 0;
        }
      });
    }
  };
  
  const Ball = ({ isActive }) => {
    
    return (
      <div
        className={`w-2 h-2 rounded-full mx-1 ${
          isActive
            ? "bg-white"
            : "bg-transparent border border-white"
        }`}
      ></div>
    );
  };

  Ball.propTypes = {
    isActive: PropTypes.bool,
  };
  
  const mobileViewStyles = {
   
  };

  const rowStyles = {
    flexDirection: activeSection === 0 ? "row" : "column", // Control the layout based on activeSection
  };

  return (
    <div
      className={`bg-[#070213] w-full min-h-screen flex-row text-white ${
        activeSection === 0 ? "" : "mobile-view"
      }`}
      style={activeSection === 0 ? {} : mobileViewStyles}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="h-32 w-full bg-[url('../public/images/StarsStart.png')]"></div>


      {activeSection === 0 && (
      <section className="py-[3rem]" id="section-0">
      <div className={`transition-max-h ease-in-out duration-300 ${
        activeSection === 0 ? "max-h-screen" : "max-h-0"
      }`}>

      <h2 className="text-[20px] font-[500] px-[2rem] lg:px-[8rem] py-[0rem] lg:py-[2rem]">001</h2>
      <div className="flex flex-row justify-between lg:px-[8rem] py-[1rem]">
        <div className="flex flex-col md:flex-row lg:flex-row  lg:items-center justify-between  space-x-8 ">
          <div className="lg:text-[64px] text-[22px] font-[500] text-custom-500 lg:text-center pl-8 lg:pl-0 px[3rem] lg:px[0rem]">
            TRACK
          </div>
          <div className="flex flex-row  pl-0 lg:pl-12">
            <div className="flex flex-col  text-center relative">
              <div>
                <div>
                  <span className="text-[30px] lg:text-[90px] font-500">BLOCKCHAIN</span>
                </div>
                <div className="border-b w-[6rem] lg:w-[16rem] border-2 gray-600 border-custom-500"></div>
                
              </div>
              
            </div>
          </div>

          <div>
         
     
          </div>
          
         

         
        </div>
        <div>
        
        <div className="z-4 flex flex-col justify-between absolute right-3 lg:right-20 h-[130px]">
          <Ball isActive={true}/>
          <Ball isActive={false}/>
          <Ball isActive={false}/>
          <Ball isActive={false}/>
          <Ball isActive={false}/>
          </div>
        
        </div>
      </div>

      <div className="flex flex-col  px-[2rem] lg:px-[25rem] justify-between">
      <div className="text-[16px] lg:text-[18px] py-[2rem]  lg:w-3/4">Code a decentralized future through blockchain apps- innovate empower transform</div>
      <div className=""> <button className='border-2 border-white px-6 py-2 cursor-pointer hover:bg-gray-600 text-white'>More Info</button></div>
      </div>

      </div>
      </section>
      )}
       
      {activeSection === 1 && (
        <section className="py-[9rem]" id="section-1">
        <div className={`transition-max-h ease-in-out duration-300 ${
          activeSection === 1 ? "max-h-screen" : "max-h-0"
        }`}>
  
        <h2 className="text-[20px] font-[500] px-[2rem] lg:px-[8rem] py-[0rem] lg:py-[2rem]">002</h2>
      <div className="flex flex-row justify-between lg:px-[8rem] py-[1rem]">
        <div className="flex flex-col md:flex-row lg:flex-row  lg:items-center justify-between  space-x-8 ">
          <div className="lg:text-[64px] text-[22px] font-[500] text-custom-500 lg:text-center pl-8 lg:pl-0 px[3rem] lg:px[0rem]">
            TRACK
          </div>
          <div className="flex flex-row  pl-0 lg:pl-12">
            <div className="flex flex-col  text-center relative">
              <div>
                <div>
                  <span className="text-[30px] lg:text-[90px] font-500">AI/ML</span>
                </div>
                <div className="border-b w-[6rem] lg:w-[16rem] border-2 gray-600 border-custom-500"></div>
                
              </div>
              
            </div>
          </div>

          <div>
         
     
          </div>
          
         

         
        </div>
        <div>
        
        <div className="z-4 flex flex-col justify-between absolute right-3 lg:right-20 h-[130px]">
          <Ball isActive={false}/>
          <Ball isActive={true}/>
          <Ball isActive={false}/>
          <Ball isActive={false}/>
          <Ball isActive={false}/>
          </div>
        
        </div>
      </div>

      <div className="flex flex-col  px-[2rem] lg:px-[25rem] justify-between">
      <div className="text-[16px] lg:text-[18px] py-[2rem]  lg:w-3/4">Forge innovative AI/ML solutions, leveraging algorithms and machine learning to reshape technology's frontier.</div>
      <div className=""> <button className='border-2 border-white px-6 py-2 cursor-pointer hover:bg-gray-600 text-white'>More Info</button></div>
      </div>

      </div>
      </section>
      )}
       
  
        {activeSection === 2 && (
        <section className="py-[9rem]" id="section-2">
        <div className={`transition-max-h ease-in-out duration-300 ${
          activeSection === 2 ? "max-h-screen" : "max-h-0"
        }`}>
  
        <h2 className="text-[20px] font-[500] px-[2rem] lg:px-[8rem] py-[0rem] lg:py-[2rem]">003</h2>
        <div className="flex flex-row justify-between lg:px-[8rem] py-[1rem]">
          <div className="flex flex-col md:flex-row lg:flex-row  lg:items-center justify-between  space-x-8 ">
            <div className="lg:text-[64px] text-[22px] font-[500] text-custom-500 lg:text-center pl-8 lg:pl-0 px[3rem] lg:px[0rem]">
              TRACK
            </div>
            <div className="flex flex-row  pl-0 lg:pl-12">
              <div className="flex flex-col  text-center relative">
                <div>
                  <div>
                    <span className="text-[30px] lg:text-[90px] font-500">CYBERSECURITY</span>
                  </div>
                  <div className="border-b w-[6rem] lg:w-[16rem] border-2 gray-600 border-custom-500"></div>
                  
                </div>
                
              </div>
            </div>
  
            <div>
           
       
            </div>
            
           
  
           
          </div>
          <div>
          
          <div className="z-4 flex flex-col justify-between absolute right-3 lg:right-20 h-[130px]">
            <Ball isActive={false}/>
            <Ball isActive={false}/>
            <Ball isActive={true}/>
            <Ball isActive={false}/>
            <Ball isActive={false}/>
            </div>
          
          </div>
        </div>
  
        <div className="flex flex-col  px-[2rem] lg:px-[25rem] justify-between">
        <div className="text-[16px] lg:text-[18px] py-[2rem]  lg:w-3/4">Fortify digital realms: Innovate cybersecurity solutions for a safer, resilient tomorrow.</div>
        <div className=""> <button className='border-2 border-white px-6 py-2 cursor-pointer hover:bg-gray-600 text-white'>More Info</button></div>
        </div>
  
        </div>
        </section>
        )}
         
  
        {activeSection === 3 && (
        <section className="py-[9rem]" id="section-3">
        <div className={`transition-max-h ease-in-out duration-300 ${
          activeSection === 3 ? "max-h-screen" : "max-h-0"
        }`}>
  
        <h2 className="text-[20px] font-[500] px-[2rem] lg:px-[8rem] py-[0rem] lg:py-[2rem]">004</h2>
        <div className="flex flex-row justify-between lg:px-[8rem] py-[1rem]">
          <div className="flex flex-col md:flex-row lg:flex-row  lg:items-center justify-between  space-x-8 ">
            <div className="lg:text-[64px] text-[22px] font-[500] text-custom-500 lg:text-center pl-8 lg:pl-0 px[3rem] lg:px[0rem]">
              TRACK
            </div>
            <div className="flex flex-row  pl-0 lg:pl-12">
              <div className="flex flex-col  text-center relative">
                <div>
                  <div>
                    <span className="text-[30px] lg:text-[90px] font-500">HEALTHCARE</span>
                  </div>
                  <div className="border-b w-[6rem] lg:w-[16rem] border-2 gray-600 border-custom-500"></div>
                  
                </div>
                
              </div>
            </div>
  
            <div>
           
       
            </div>
            
           
  
           
          </div>
          <div>
          
          <div className="z-4 flex flex-col justify-between absolute right-3 lg:right-20 h-[130px]">
            
            <Ball isActive={false}/>
            <Ball isActive={false}/>
            <Ball isActive={false}/>
            <Ball isActive={true}/>
            <Ball isActive={false}/>
            </div>
          
          </div>
        </div>
  
        <div className="flex flex-col  px-[2rem] lg:px-[25rem] justify-between">
        <div className="text-[16px] lg:text-[18px] py-[2rem]  lg:w-3/4">Revolutionize healthcare: Develop solutions that enhance well-being, merging technology and compassion.</div>
        <div className=""> <button className='border-2 border-white px-6 py-2 cursor-pointer hover:bg-gray-600 text-white'>More Info</button></div>
        </div>
  
        </div>
        </section>
        )}
         
  
        {activeSection === 4 && (
        <section className="py-[9rem]" id="section-4">
        <div className={`transition-max-h ease-in-out duration-300 ${
          activeSection === 4 ? "max-h-screen" : "max-h-0"
        }`}>
  
        <h2 className="text-[20px] font-[500] px-[2rem] lg:px-[8rem] py-[0rem] lg:py-[2rem]">005</h2>
        <div className="flex flex-row justify-between lg:px-[8rem] py-[1rem]">
          <div className="flex flex-col md:flex-row lg:flex-row  lg:items-center justify-between  space-x-8 ">
            <div className="lg:text-[64px] text-[22px] font-[500] text-custom-500 lg:text-center pl-8 lg:pl-0 px[3rem] lg:px[0rem]">
              TRACK
            </div>
            <div className="flex flex-row  pl-0 lg:pl-12">
              <div className="flex flex-col  text-center relative">
                <div>
                  <div>
                    <span className="text-[30px] lg:text-[90px] font-500">AGRICULTURE</span>
                  </div>
                  <div className="border-b w-[6rem] lg:w-[16rem] border-2 gray-600 border-custom-500"></div>
                  
                </div>
                
              </div>
            </div>
  
            <div>
           
       
            </div>
            
           
  
           
          </div>
          <div>
          
          <div className="z-4 flex flex-col justify-between absolute right-3 lg:right-20 h-[130px]">
           
            <Ball isActive={false}/>
            <Ball isActive={false}/>
            <Ball isActive={false}/>
            <Ball isActive={false}/>
            <Ball isActive={true}/>
            </div>
          
          </div>
        </div>
  
        <div className="flex flex-col  px-[2rem] lg:px-[25rem] justify-between">
        <div className="text-[16px] lg:text-[18px] py-[2rem]  lg:w-3/4">Merge tech and earth's bounty: Innovate agri-solutions for sustainable growth.</div>
        <div className=""> <button className='border-2 border-white px-6 py-2 cursor-pointer hover:bg-gray-600 text-white'>More Info</button></div>
        </div>
  
        </div>
        </section>
        )}
         
      
      
    </div>
  );
}

