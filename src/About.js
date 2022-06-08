import React from "react";
import "./About.css";
import aboutImg from "./img/about1.png";
function About() {
   //UP TO TOP BTN
   window.addEventListener("scroll",function(){
     const upToTop =document.querySelector("a.bottom__to__top");
     upToTop.classList.toggle("active",window.scrollY > 0)

   });



  return (
    <div className="about components__space "id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hello, I am vinod Kumar pursuing B.tech in computer science engineering from Chhatrapati sahu ji maharaj University Kanpur.
                I want to give something to the world as a fronted React developer.

                My Skills-Problem solving , collaboration,  adaptability,   critical thinking,  strong work Ethic, Leadership,
                Time management , Leadership,   Handling Pressure. 
              </p>

              <p className="about__text p__color">
               Aiming to  build up my career as an expert Fronted React   Developer.
               <p><strong>skills=></strong>Hyper Text markup language(HTML), Cascading Style Sheets(CSS),Javascript(js),Reactjs</p>
               <p>I have created 2 websites . First websites name textutils which convert to uppercase to lowercase,lowercase to uppercase, also tells the reading time of whole text.And websites name Newmonkey.newmonkey i have use API.</p>
              </p>
              <p className="about__text p__color">
                I am excited to continue my career at fronted React developer with a focus on fronted site developments easily accessible,completely responsive,and intuitive for users. 
              </p>
              <div className="about__button d__flex align_items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom_to_top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
