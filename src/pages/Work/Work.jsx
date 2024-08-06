// import { Component } from "./Components/section1"

import { HeroSection } from "./Components/section1"

import React from "react"
import { Link, useParams } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import pic from "../../assets/img/vv.png";
import logo from "../../assets/img/Womsh_Logo___SVG___Alphabet__Letter_W_Logo-removebg-preview.png";
export const WorkPage = () => {
    return (
        <>

<div>

<div className="bg-[#e4e2dd] overflow-hidden h-screen min-h-[98vh] w-full flex justify-between items-center pt-3 relative ">
    <div className="flex flex-col   h-screen justify-between">
        <div>
        <Link  to={'/'}>
            <img src={logo} className="w-[90px]  " alt="" />
            </Link>
        </div>
        <div className=" px-9 font-serif mt-3  text-2xl  h-[60%]  font-extrabold">
            <FaGithub className="mt-3" />
            <FaInstagram className="mt-3" />
            <FaLinkedin className="mt-3" />
        </div>
    </div>

    <div className=" h-[85%]">
        
        <div className="text-9xl fw-bold font-extrabold font-serif relative z-10">
            <div className="scroll-container relative top-52 left-8 ml-6">
                <span className="scroll-text">hello work</span>
            </div>
        </div>
    </div>
    <div className=" px-2 py-2 font-serif mt-3  text-xl  h-screen  font-extrabold  flex flex-col justify-around ">
        <p className="transform rotate-90"> <Link className="no-underline text-black " to={'/about'}> About</Link></p>
        <p className="transform rotate-90">  <Link className="no-underline text-black"> Work</Link></p>
        <p className="transform rotate-90">  <Link className="no-underline text-black" to={'/contact'}> Contact</Link></p>
    </div>
</div>
</div>
        
            
        </>
    )
}