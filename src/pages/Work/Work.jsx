// import { Component } from "./Components/section1"

import { HeroSection } from "./Components/section1"

import React from "react"
import { Link, useParams } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";
import pic from "../../assets/img/vv.png";
import logo from "../../assets/img/Womsh_Logo___SVG___Alphabet__Letter_W_Logo-removebg-preview.png";
export const WorkPage = () => {
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
                        <div className=" w-[20%] flex flex-col gap-5"> <h4 className="text-gray-500">TIMERFRAME</h4> <h5>YEAR 2023-24</h5></div>
                        <div className=" w-[15%] flex flex-col gap-4"> <h4 className="text-gray-500">LANGUAGES</h4><div className="flex flex-col">
                            <h5>Javasript</h5>
                            <h5>HTML</h5>
                            <h5>CSS</h5>
                            <h5>SASS</h5>
                        </div></div>
                        <div className=" w-[15%] flex flex-col gap-4"> <h4 className="text-gray-500">Frameworks</h4> <div className="flex flex-col">
                            <h5>ReactJs</h5>
                            <h5>Laravel</h5>
                            <h5>NodeJs</h5>
                            <h5>MysQl</h5>
                            <h5>Tailwind</h5>
                        </div></div>
                        <div className=" w-[15%] flex flex-col gap-4"> <h4 className="text-gray-500" >TOOLS</h4> <div className="flex flex-col">
                            <h5>Git/Github</h5>
                            <h5>Figma</h5>
                            <h5>Postman</h5>
                        </div></div>
                        <div className=" w-[35%] flex flex-col gap-4"> <h4 className="text-gray-500">INDUSTRY</h4> <div className=" flex flex-wrap gap-4"> <button className=" border-black border-2 rounded-md px-3">#TECH</button><button  className=" border-black border-2 rounded-md px-3">#CRYPTO</button><button  className=" border-black border-2 rounded-md px-3">#AI</button><button  className=" border-black border-2 rounded-md px-3">#TECH</button> <button  className=" border-black border-2 rounded-md px-3">#TECH</button> <button  className=" border-black border-2 rounded-md px-3">#TECH</button></div></div>
                    </div>
                </div>
<div className="flex flex-col gap-7  py-5 px-8">

                <div className="flex justify-around items-center border-black border-b border-t py-4 ">
                    <h1>GIS</h1>
                    <h4 className="w-[30%] text-center"> Laravel , tailwind , SASS, Bootstrap , MySQl</h4>
                    <h5 className="w-[30%] text-center text-gray-500">GENERAL INTELLIGENCE SERVICES</h5>
                </div>
</div>
            </div>


        </div>
    )
}