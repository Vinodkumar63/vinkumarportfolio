import React,{useState} from "react";
import "./Home.css";
import logo from "./img/logo.jpg";
import vinodimage from "./img/bg3.png";

function Home() {
  //fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector("./header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const[show,setShow]=useState(true);

  return (
    <div className="Home" id="Home">
      <div className="home_bg">
        <div className="header d__flex align_items_center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav_items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav_items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav_items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav_items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav_items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav_items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* toggle menu */}
          <div className="toggle__menu">
            <svg onClick={()=>setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
            <ul className="sidebar d__flex">
              <li className="sideNavbar">
                <a href="#home">Home</a>
              </li>
              <li className="sideNavbar">
                <a href="#about">About</a>
              </li>
              <li className="sideNavbar">
                <a href="#service">Service</a>
              </li>
              <li className="sideNavbar">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="sideNavbar">
                <a href="#blog">Blog</a>
              </li>
              <li className="sideNavbar">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          ):null}
        </div>
{/* HOME CONTENT */}
        <div className="container">
          <div className="cont">
            <div className="home__content">
              <div className="home__meta">
                <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
                <h2 className="home__text pz__10">Hi, I'm Vinod Kumar</h2>
                <h3 className="home__text sweet pz__10">React Developer.</h3>
                <h4 className="home__text pz__10">based in India.</h4>
              </div>
              <div className="about">
                <span className=" about__text">
                  {" "}
                  Hi my name is Vinod Kumar. I am 3rd year student of computer
                  science Engineering from Chhatrapati Sahu ji
                  Maharaj University Kanpur. I want to give full cooperation in the
                  development of the country in the field of IT Enginnering.
                </span>
              </div>
            </div>
            <div className="vinimage">
              <img src={vinodimage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
