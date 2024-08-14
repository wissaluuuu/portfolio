import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import pic from "../../../assets/img/kk-removebg.png";
import logo from "../../../assets/img/Womsh_Logo___SVG___Alphabet__Letter_W_Logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HeroSection = () => {
    

    return (
        <div>
            <div className="bg-[#e4e2dd] overflow-hidden h-screen min-h-[98vh] w-full flex justify-between items-center pt-3 relative ">
                <div className="flex flex-col   h-screen justify-between">
                    <div>
                        <img src={logo}  className="w-[90px]  " alt="" />
                    </div>
                    <div className=" px-9 font-serif mt-3  text-2xl  h-[60%]  font-extrabold">
                        <a href="https://github.com/wissaluuuu" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="mt-3 text-black" />
                        </a>
                        <a href="https://www.linkedin.com/in/wissal-chreiba-b60a19249" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="mt-3 text-black" />
                        </a>
                        <FaInstagram className="mt-3" />
                    </div>
                </div>
                <div className=" h-[85%]">

                    <div className="text-9xl fw-bold font-extrabold font-serif relative z-10">
                        <img src={pic} className="h-[90vh] absolute top-0 left-1/2 z-20 transform -translate-x-1/2" alt="" />
                        <div className="scroll-container relative top-52 left-8 ml-6">
                            <span className="scroll-text">web developer</span>
                        </div>
                    </div>
                </div>
                <div className=" px-2 py-2 font-serif mt-3  text-xl  h-screen  font-extrabold  flex flex-col justify-around ">
                    <p className="transform rotate-90">   About</p>
                    <p className="transform rotate-90">    Work</p>
                    <p className="transform rotate-90">   Contact</p>
                </div>
            </div>
            
        </div>
    );
};



