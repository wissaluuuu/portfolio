import category111 from "../assets/img/category.png";
import category1 from "../assets/img/category1.png";
import category2 from "../assets/img/category2.png";
import category3 from "../assets/img/sweats.png";
import category4 from "../assets/img/sac.png";
import category5 from "../assets/img/casquette.png";
import React, { createContext, useState } from 'react'
import product from "../assets/img/pants.png";

export const MyContext = createContext()        
export const MyProvider = ({ children }) => {
    const [myproducts, setMyproducts] = useState([


        {
            myname: "jeans",
            image: category111,
            category: "jean"
        }, {
            myname: "t-shirt et crop",
            image: category1,
            category: "t-shirt et crop"
        }, {
            myname: "chaussetes",
            image: category2,
            category: "chaussettes"
        },
        {
            myname: "sweats",
            image: category3,
            category: "chaussettes"
        },{
            myname: "sacs",
            image: category4,
            category: "chaussettes"
        },{
            myname: "casquettes",
            image: category5,
            category: "chaussettes"
        },
    ])











    return (
        <>



            <MyContext.Provider value={[myproducts, setMyproducts]} >
                {children}
            </MyContext.Provider>
        </>
    )
}
