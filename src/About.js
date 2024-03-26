import React from "react";
import "./About.css";
import aboutImg from "./img/manoj.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Meet Manojkumar, a passionate software developer dedicated to
                crafting innovative solutions through code. With a keen eye for
                detail and a creative mind, Manojkumar thrives in the dynamic
                world of technology, where every line of code holds the
                potential to transform ideas into reality.
              </p>
              <p className="about__text p__color">
                Driven by a relentless curiosity, Manojkumar is always eager to
                explore new technologies and methodologies, constantly seeking
                to expand his skill set and stay at the forefront of industry
                trends. Whether it's developing sleek web applications, building
                robust backend systems, or diving into the intricacies of data
                analysis, Manojkumar approaches each project with enthusiasm and
                determination.
              </p>
              <p className="about__text p__color">
                Beyond the confines of software development, Manojkumar is known
                for his collaborative spirit and strong communication skills. He
                thrives in team environments, where he can exchange ideas,
                tackle challenges head-on, and contribute to the collective
                success of the project. His ability to translate complex
                technical concepts into clear, understandable language makes him
                a valuable asset in any team setting.
              </p>
              <div className="about__button d__flex align__items__center">
                <a
                  href="https://www.instagram.com/manojkumar_baskaran/"
                  target="_blank"
                >
                  <button className="about btn pointer">Instagram</button>
                </a>
                {/* <i class="fab fa-instagram"></i> */}
                <a
                  href="https://www.linkedin.com/in/manojkumar-k-b-1a2a40150/"
                  target="_blank"
                >
                  <button className="about btn pointer">Linked In</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
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
