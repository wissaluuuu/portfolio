// import { Component } from "./Components/section1"

import { HeroSection } from "./Components/section1"

import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";
import pic from "../../assets/img/vv.png";
import pic2 from "../../assets/img/gisservice.png";

import logo from "../../assets/img/Womsh_Logo___SVG___Alphabet__Letter_W_Logo-removebg-preview.png";
import { FaCircle } from "react-icons/fa";
export const WorkPage = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const projects = [
        { name: "GIS", tools: "Laravel, Tailwind, SASS, Bootstrap, MySQL", description: "GENERAL INTELLIGENCE SERVICES", img: pic2 },
        { name: "Lionsgeek", tools: "ReactJs, Tailwind, SASS, Bootstrap, MySQL , API", description: "lionsgeek ", img: pic },
        { name: "Casatourat", tools: "React Native, Laravel , API, Tailwind, SASS, Bootstrap, MySQL", description: "GENERAL INTELLIGENCE SERVICES", img: pic },
        { name: "Wissu", tools: "Laravel, Tailwind , JSAP , Bootstrap, MySQL", description: "Task management", img: pic },
        { name: "ecomm", tools: "Laravel, Tailwind, SASS, Bootstrap, MySQL", description: "GENERAL INTELLIGENCE SERVICES", img: pic }
    ];
    return (
        <div >

            <div className="bg-[#e4e2dd] shadow-2xl h-fit  text-black">
                <div className="  w-full items-center py-16">
                    <div className="px-8">
                        <div className=" border border-black overflow-hidden"><h1 className="text-[8vw] animate-scrollX  whitespace-nowrap"> 🔥WISSALUU🏄‍♀️WISSALUU🔥WISSALUU🔥</h1> </div>
                    </div>
                    <div className="flex items-center px-3  pt-4 ">
                        <div className="border-b-[1px] border-black  flex items-center w-full p-4">

                            <FaArrowTurnDown className="text-[5vw]" />
                            <h1 className="text-[7vw] w-[80%] "  >Projects </h1>
                        </div>
                    </div>

                    <div className="flex gap-11 py-4 px-8">
                        <div className=" w-[10%] flex flex-col gap-5"> <h6 className="text-gray-500">TIMERFRAME</h6> <h6>YEAR 2023-24</h6></div>
                        <div className=" w-[10%] flex flex-col gap-4"> <h6 className="text-gray-500">Technologies</h6>
                            <div className="flex gap-3 ">

                                <div className="flex flex-col">
                                    <h6>Javasript</h6>
                                    <h6>HTML</h6>
                                    <h6>CSS</h6>
                                    <h6>SASS</h6>
                                </div>
                                {/* <div className="flex flex-col">
                                    <h6>ReactJs</h6>
                                    <h6>Laravel</h6>
                                    <h6>NodeJs</h6>
                                    <h6>MysQl</h6>
                                    <h6>Tailwind</h6>
                                </div> */}
                            </div>
                        </div>
                        <div className=" w-[10%] flex flex-col gap-4"> <h6 className="text-gray-500">Frameworks</h6> <div className="flex flex-col">
                            <h6>ReactJs</h6>
                            <h6>Laravel</h6>
                            <h6>NodeJs</h6>
                            <h6>MysQl</h6>
                            <h6>Tailwind</h6>
                        </div></div>
                        <div className=" w-[10%] flex flex-col gap-4"> <h6 className="text-gray-500" >TOOLS</h6> <div className="flex flex-col">
                            <h6>Git/Github</h6>
                            <h6>Figma</h6>
                            <h6>Postman</h6>
                        </div></div>
                        <div className=" w-[35%] flex flex-col gap-4"> <h6 className="text-gray-500">INDUSTRY</h6> <div className=" flex flex-wrap gap-4"> <button className=" border-black border-2 rounded-md px-3">#TECH</button><button className=" border-black border-2 rounded-md px-3">#CRYPTO</button><button className=" border-black border-2 rounded-md px-3">#AI</button><button className=" border-black border-2 rounded-md px-3">#TECH</button> <button className=" border-black border-2 rounded-md px-3">#TECH</button> <button className=" border-black border-2 rounded-md px-3">#TECH</button></div></div>
                    </div>
                </div>
                
{/* projects */}
                <div className="flex flex-col gap-[8vh] py-5 px-20">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center hover:bg-[#d2cfca] border-black border-b border-t py-4 relative"
                            onMouseEnter={() => setHoveredProject(project)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="flex w-[20%] items-center gap-2">
                                <FaCircle />
                                <h2>{project.name}</h2>
                            </div>
                            <h4 className="w-[33%] text-center">{project.tools}</h4>
                            <h5 className="w-[33%] text-center text-gray-500">{project.description}</h5>
                            {hoveredProject === project && (
                            <img
                                src={pic2}
                                alt={`${project.name} image`}
                                className="absolute top-[-50%] left-0 w-[100%] h-[100%] object-cover z-10"
                            />
                        )}
                            {/* <img src={pic2}  alt="" /> */}
                        </div>
                    ))}
                </div>

            </div>


        </div>
    )
}