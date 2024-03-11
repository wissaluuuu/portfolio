import pic from "../../assets/img/vv.png";
import React from "react"
import { Link, useParams } from "react-router-dom"
import logo from "../../assets/img/Womsh_Logo___SVG___Alphabet__Letter_W_Logo-removebg-preview.png";


export const AboutPage = (props) => {
    // const { id } = useParams()

    return (

        <>
            <div className=" bg-[#e4e2dd] h-screen min-h-[95vh] w-full relative ">
                <div className=" px-9 font-serif   text-2xl  h-screen  font-extrabold absolute right-1">
                    <p > <Link className="no-underline text-black " to={'./About'}> About</Link></p>
                    <p>  <Link className="no-underline text-black" > Work</Link></p>
                    <p>  <Link className="no-underline text-black" to={'./market'}> Contact</Link></p>
                </div>

                <div className="h-[90vh]  flex justify-center  p-9 ">
                    <div className="w-[50%] mt-28  flex flex-col gap-9 " >
                        <div className="font-bold text-3xl">Hello Coach Mahdi</div>
                        <div className="text-9xl fw-bold font-extrabold  ">I'm Wissal</div>
                        <div className="w-[50%] text-lg">Hi! I'm a web developer based in Casablanca. Everyday I learn , read and practice to create  the best websites as possible . it's beautiful to have a passion and a work at the same time . dont you think?</div>

                    </div>
                    <div className="  ">


                        <img src={pic} className="h-[95vh] " alt="" />
                    </div>


                </div>
            </div>
        </>
    )
}