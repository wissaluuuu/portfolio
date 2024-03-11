import { useContext, useState } from "react"
import { CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Carousel } from 'flowbite-react';
import { MyContext } from "../../../utils/contextProvider";
import { FaLinkedin } from "react-icons/fa";

import pic from "../../../assets/img/kk-removebg.png";
import logo from "../../../assets/img/Womsh_Logo___SVG___Alphabet__Letter_W_Logo-removebg-preview.png";
import { Link } from "react-router-dom";

export const HeroSection = () => {
    const [myproducts, setMyproducts] = useContext(MyContext);

    return (
        <div >

            <div className="bg-[#e4e2dd] h-screen min-h-[98vh] w-full flex justify-between items-center pt-3 relative ">
                <div className="flex flex-col   h-screen justify-between">
                    <div>
                        <img src={logo} className="w-[90px]  " alt="" />
                    </div>
                    <div className=" px-9 font-serif mt-3  text-2xl  h-[60%]  font-extrabold">
                        <FaGithub className="mt-3" />
                        <FaInstagram className="mt-3" />
                        <FaLinkedin className="mt-3" />
                    </div>
                </div>

                <div className=" h-[85%]">
                    <div className=" text-9xl fw-bold font-extrabold font-serif relative z-10">
                        <img src={pic} className="h-[90vh] absolute top-0 left-1/2 z-20 transform -translate-x-1/2" alt="" />
                        <span className="relative top-52  left-8 ml-6">web developer </span>
                    </div>
                </div>
                <div className=" px-9 font-serif mt-3  text-2xl  h-screen  font-extrabold">
                    <p > <Link className="no-underline text-black " to={'./About'}> About</Link></p>
                    <p>  <Link className="no-underline text-black"> Work</Link></p>
                    <p>  <Link className="no-underline text-black" to={'./market'}> Contact</Link></p>
                </div>
            </div>
        </div>
    );
};



