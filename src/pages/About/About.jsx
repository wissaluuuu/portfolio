// import pic from "../../assets/img/vv.png";
import React from "react"
import { Link, useParams } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import pic from "../../assets/img/vv.png";
import logo from "../../assets/img/Womsh_Logo___SVG___Alphabet__Letter_W_Logo-removebg-preview.png";
// import { Link } from "react-router-dom";


export const AboutPage = () => {
    // const { id } = useParams()

    return (

        <>
            
            <div>

{/* <div className="bg-[#e4e2dd] overflow-hidden h-screen min-h-[98vh] w-full flex justify-between items-center pt-3 relative ">
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
        
        <div className=" fw-bold font-extrabold font-serif relative z-10">
            <div className="px-10"> 

                <span className="text-9xl scroll-text">hello about </span>
            </div>
                <p className="selection:bg-green-400" >Wissal (she/her) is a dedicated full stack web developer with a passion for innovation and technology. She specializes in ReactJS, Laravel, and mobile development with React Native, using her skills to create dynamic and impactful web and mobile applications. Currently based in the vibrant city of [Your City], Wissal operates globally and is ready to tackle any development challenge.</p>
        </div>
    </div>
    <div className=" px-2 py-2 font-serif mt-3  text-xl  h-screen  font-extrabold  flex flex-col justify-around ">
        <p className="transform rotate-90"> <Link className="no-underline text-black " to={'/about'}> About</Link></p>
        <p className="transform rotate-90">  <Link className="no-underline text-black" to={'/work'}> Work</Link></p>
        <p className="transform rotate-90">  <Link className="no-underline text-black" to={'/contact'}> Contact</Link></p>
    </div>
</div> */}
<div className="h-fit ">

<div className="bg-black text-[#e4e2dd] py-24  w-full h-fit  flex  justify-between">
    <h1 className="text-[5vw] px-3 ">About</h1>
                <div className="w-[65%]  ">
                {/* <h6 className="text-[5vw] font-mono "> CHREIBA WISSAL</h6> */}
                
                <p className="text-3xl pr-3 selection:bg-[#ccff00] selection:text-black font-bold leading-[7vh]"> Wissal <span className="font-extralight">(she/her)</span> is a passionate full stack developer with a love for innovation and technology. She specializes in ReactJS, Laravel, and mobile development with React Native. Using these tools, she builds efficient and impactful web and mobile applications. Currently based in the vibrant city of Mohammedia, Wissal is eager to take on new challenges in web development and bring creative solutions to life. </p>
                <p className="selection:bg-[#ccff00] selection:text-black">Coding is my favorite videogame.</p>
                </div>
            </div>
</div>
</div>
        </>
    )
}