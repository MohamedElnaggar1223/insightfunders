'use client'

import Image from "next/image";
import '@/app/globals.css'
import { useEffect, useState } from "react";

export default function Hamburger()
 
{
    const [data, setData] = useState(false)
    const handleClick =()=>{
        setData(true)

    }
    useEffect(()=>{
        localStorage.setItem('hamburgerState', JSON.stringify(data))
    },[data])
    return(
        <Image      
        id="hamburger"
        src="/images/hamburger.svg"
        width={30}
        height={30}
        alt="logo"
        className="filter invert hamburger"
        onClick={handleClick}
      />
    )
}