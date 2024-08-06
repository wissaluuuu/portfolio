
import React, { createContext, useState } from 'react'
import product from "../assets/img/pants.png";

export const MyContext = createContext()        
export const MyProvider = ({ children }) => {
    const [myproducts, setMyproducts] = useState([


        
    ])
    return (
        <>



            <MyContext.Provider value={[myproducts, setMyproducts]} >
                {children}
            </MyContext.Provider>
        </>
    )
}
