import React from "react"
import { Link, useParams } from "react-router-dom"


export const ContactPage = (props) => {

    return (

        <>
            <div className=" bg-[#e4e2dd] h-screen  relative">

                <div className=" px-9 font-serif   text-2xl  h-screen  font-extrabold absolute right-1">
                    <p > <Link className="no-underline text-black " to={'./About'}> About</Link></p>
                    <p>  <Link className="no-underline text-black" > Work</Link></p>
                    <p>  <Link className="no-underline text-black" to={'./market'}> Contact</Link></p>
                </div>
                <div className=" h-screen w-[50%] flex justify-center items-center">

            <form  className="flex flex-col w-[30vw] gap-3    border border-black p-7 rounded-lg   ">
                <label >Name</label>
                <input id="from_name"  type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message"  />
                <button type="submit" className="text-start"> Send</button>
            </form>
                </div>
            </div>

        </>
    )
}