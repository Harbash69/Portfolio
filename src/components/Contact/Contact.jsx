import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";

import React, { useRef, useEffect } from 'react';

  const logoRef = useRef(null);
  const imagesRef = useRef([]);

  const getActive = () => document.body.dataset.active === 'true';
  const setActiveTo = (active) => (document.body.dataset.active = active);

  const shift = (image, index, rangeX, rangeY) => {
    const active = getActive();

    const translationIntensity = active ? 24 : 4;
    const maxTranslation = translationIntensity * (index + 1);
    const currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;

    const scale = active ? 1 + index * 0.4 : 1;

    image.animate(
      { translate: currentTranslation, scale },
      { duration: 750, fill: 'forwards', easing: 'ease' }
    );
  };

  const shiftAll = (rangeX, rangeY) => {
    imagesRef.current.forEach((image, index) => shift(image, index, rangeX, rangeY));
  };

  const shiftLogo = (e) => {
    const rect = logoRef.current.getBoundingClientRect();
    const radius = 1000;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rangeX = (e.clientX - centerX) / radius;
    const rangeY = (e.clientY - centerY) / radius;

    shiftAll(rangeX, rangeY);
  };

  const resetLogo = () => {
    setActiveTo(false);
    shiftAll(0.4, -0.7);
  };

  useEffect(() => {
    window.addEventListener('mousemove', shiftLogo);
    document.body.addEventListener('mouseleave', () => {
      if (!getActive()) resetLogo();
    });
    window.addEventListener('mousedown', (e) => {
      setActiveTo(true);
      shiftLogo(e);
    });
    window.addEventListener('mouseup', resetLogo);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', shiftLogo);
      document.body.removeEventListener('mouseleave', () => {
        if (!getActive()) resetLogo();
      });
      window.removeEventListener('mousedown', (e) => {
        setActiveTo(true);
        shiftLogo(e);
      });
      window.removeEventListener('mouseup', resetLogo);
    };
  }, []); // Empty dependency array to ensure the effect runs once on mount

    const notify = () => toast.info('Message sent ✅ ', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
    });

function Contact() {
  const onChange =() =>{};
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lkm4eai', 'template_wledtnd', form.current, 'Wz9bLdgTf_9NzgXDi')
      .then((result) => {
          console.log(result.text);
          console.log("message sent ✅")
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    
    <div id="contact" className="container m-auto mt-16">         

      {/* heading */}
      <div 
      // data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div data-aos="zoom-in">
              <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
              <h3 className="text-xl sm:text-lg">
                Beautiful design for your website leave a request
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button              
              data-aos="zoom-in"              
              className= " text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form            
            data-aos="zoom-in"            
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            ref={form} onSubmit={sendEmail}>
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. Oussema@email.com"
              name="from_email"
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. Oussema Hedfi"
              name="from_name"
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name="message"
              
            />
            <ReCAPTCHA sitekey="6Le7YwgoAAAAAP7end1gpO-H34KUw6rPW6G3iLvZ" onChange={onChange} style={{'border':'1px solid purple','width':'79.6%','height':'78px','borderRadius':'4px'}}/>
            <button type="submit" action="sendEmail" onClick={notify}
              className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
                
            >             
              send
            </button>



          </form>
          
        </div>
      </div>
            <div ref={logoRef}>
      {/* Assuming your images are in the 'images' array */}
      {imagesRef.current.map((image, index) => (
        <img key={index} ref={(el) => (imagesRef.current[index] = el)} src={image.src} alt={`Image ${index}`} />
      ))}
    </div>
       <div id="logo">
        <img src="https://i.postimg.cc/43GqKG22/2.png" draggable="false" />
        <img src="https://i.postimg.cc/Fz6w1Jw0/4.png" draggable="false" />
        <img src="https://i.postimg.cc/WzzQ27Y2/5.png" draggable="false" />
        <img src="https://i.postimg.cc/jdmrSGrB/8.png" draggable="false" /> 
        <img src="https://i.postimg.cc/vmXpqzRp/3.png" draggable="false" />
      </div>
            <iframe title="Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.9834833610341!2d10.188194869556689!3d36.86800017117499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb32beee11c1%3A0x1813bbb222a2ad8e!2sOussema%20Hedfi!5e0!3m2!1sfr!2stn!4v1693401362126!5m2!1sfr!2stn" style={{'width':'100%','height':'500px','border':'solid'}} ></iframe>

       {/* Your CSS */}
              <style>
                          {`
                #logo {
                  position: relative;
                  width: 200px;
                  aspect-ratio: 1000 / 556;
                  user-select: none;
                  right:-15%;
                  margin-top:-5%
                }
                #logo > img {
                  width: 100%;
                  position: absolute;
                }
                `}
              </style>
              
              
</div>  
  
);

};

export default Contact;
