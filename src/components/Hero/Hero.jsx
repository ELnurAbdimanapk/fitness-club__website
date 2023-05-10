import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import "../../App.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>

          <span>the best fitness club in the town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Lorem molestiae. Enim tempore quasi corporis distinctio minima
              doloremque labore temporibus!
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <CountUp end={140} start={100} delay="4" prefix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <CountUp end={978} start={800} delay="4" prefix="+" />
            </span>
            <span>members joined </span>
          </div>
          <div>
            <span>
              <CountUp end={50} start={0} delay="4" prefix="+" />
            </span>
            <span>fitness program</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart_rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "20rem" }}
          whileInView={{ right: "25rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div
          initial={{ right: "57rem" }}
          whileInView={{ right: "38rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
