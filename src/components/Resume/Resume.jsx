/* eslint-disable no-undef */
import { useEffect, useState } from 'react';

const Resume = () => {
  const [curPage, setCurPage] = useState(1);
  const numOfPages = 5; // Adjust this based on the actual number of pages
  const animTime = 1000;
  const pgPrefix = ".skw-page-";

  const pagination = () => {
    // eslint-disable-next-line no-undef
    scrolling = true;

    document.querySelector(`${pgPrefix}${curPage}`).classList.remove("inactive");
    document.querySelector(`${pgPrefix}${curPage}`).classList.add("active");
    document.querySelector(`${pgPrefix}${curPage - 1}`).classList.add("inactive");
    document.querySelector(`${pgPrefix}${curPage + 1}`).classList.remove("active");

    setTimeout(() => {
      
      scrolling = false;
    }, animTime);
  };

  const navigateUp = () => {
    if (curPage === 1) return;
    setCurPage(curPage - 1);
    pagination();
  };

  const navigateDown = () => {
    if (curPage === numOfPages) return;
    setCurPage(curPage + 1);
    pagination();
  };

  useEffect(() => {
    const handleMouseWheel = (e) => {
      if (scrolling) return;
      if (e.deltaY < 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    };

    const handleKeyDown = (e) => {
      if (scrolling) return;
      if (e.keyCode === 38) {
        navigateUp();
      } else if (e.keyCode === 40) {
        navigateDown();
      }
    };

    let scrolling = false;

    document.addEventListener("mousewheel", handleMouseWheel);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousewheel", handleMouseWheel);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [curPage]);

  return (
    <div className="skw-pages">
      <style>
        {`
          ::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}

::-webkit-scrollbar-button {
  width: 1px;
  height: 1px;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  background-color:transparent;
  font-size: 16px;
}

body {
    background-color:transparent;
  overflow: hidden;
  font-size: 1em;
}

.horizontal-scroll {
  width: 100vh;
  height: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 30px;
  transform-origin: right top;
  transform: rotate(-90deg) translate3d(0, -100vh, 0);
}
.horizontal-scroll > * {
  transform-origin: left top;
  transform: rotate(90deg) translate3d(0, calc(-100vh + 60px), 0);
}
.horizontal-scroll__block {
  width: calc(100vh - 60px);
  height: calc(100vh - 60px);
  background: #FDFFFC;
  position: relative;
}
.horizontal-scroll__block:not(:first-child) {
  margin-top: 30px;
}
.horizontal-scroll__block .background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: no-repeat center center/cover;
  opacity: 0.8;
  background-blend-mode: luminosity;
}
.horizontal-scroll__block .letter {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-weight: normal;
  font-size: 1.5em;
  font-family: "Playfair Display", serif;
  color: black;
}
.letter {
  width : 90%
}
.horizontal-scroll__block--purple .background {

}
.horizontal-scroll__block--yellow .background {
  background-color: #ECC30B;
}
.horizontal-scroll__block--orange .background {
  background-color: #F37748;
}
.horizontal-scroll__block--blue .background {
  background-color: #4D9DE0;
}
.horizontal-scroll__block--green .background {
  background-color: #00BD9D;
}
.horizontal-scroll__block--pink .background {
  background-color: #FB9F89;
}
        `}
      </style>
      <div className={`skw-page skw-page-${curPage} active`}>
        
        <div className="horizontal-scroll">
      <div className="horizontal-scroll__block horizontal-scroll__block--purple">
        <div className="background" style={{ backgroundImage: 'url(https://i.postimg.cc/LsMrLFtd/Old-Google-Map.png)' }}></div>
        <span className="letter">    During my internship at Telcotec, I had the opportunity to gain practical experience in a professional setting. I was exposed to various aspects of Web development and had hands-on experience with technologies like Angular, SpringBoot, and MySQL. 
                My responsibilities included collaborating with the development team to implement new features, 
                participating in the design and implementation, ensuring the smooth functioning of applications.
                This internship allowed me to apply the knowledge I gained during my academic studies and develop a deeper understanding of real-world software development processes. 
                It also reinforced my skills in teamwork, problem-solving, and working within an Agile development framework.
                </span>
      </div>
      <div className="horizontal-scroll__block horizontal-scroll__block--yellow">
        <div className="background" style={{ backgroundImage: 'url(https://www.dialgb.nl/wp-content/uploads/IMG_1741.jpg)' }}></div>
        <span className="letter">E</span>
      </div>
      <div className="horizontal-scroll__block horizontal-scroll__block--orange">
        <div className="background" style={{ backgroundImage: 'url(https://www.dialgb.nl/wp-content/uploads/IMG_1740.jpg)' }}></div>
        <span className="letter">I</span>
      </div>
      <div className="horizontal-scroll__block horizontal-scroll__block--blue">
        <div className="background" style={{ backgroundImage: 'url(https://www.dialgb.nl/wp-content/uploads/IMG_1745.jpg)' }}></div>
        <span className="letter">O</span>
      </div>
      <div className="horizontal-scroll__block horizontal-scroll__block--green">
        <div className="background" style={{ backgroundImage: 'url(https://www.dialgb.nl/wp-content/uploads/IMG_1747.jpg)' }}></div>
        <span className="letter">U</span>
      </div>
      <div className="horizontal-scroll__block horizontal-scroll__block--pink">
        <div className="background" style={{ backgroundImage: 'url(https://www.dialgb.nl/wp-content/uploads/IMG_1746.jpg)' }}></div>
        <span className="letter">!</span>
      </div>
    </div>


      </div>

    </div>
  );
}

export default Resume;
