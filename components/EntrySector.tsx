"use client"


import React from "react"

import {Button,} from "@/components/ui/button"
import { Textarea } from "./ui/textarea"

type Entry = {

    onSubmit: (data:{age: string}) => void
    onAgeChange: (ageValue: string) => void
    ageNumber: string

}





export default function EntrySector({onSubmit, onAgeChange, ageNumber}: Entry){




    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        onSubmit({age:ageNumber})



    }





    return(

       <form onSubmit={handleSubmit}>


        <h1 className="mt-10 text-3xl sm:text-4xl md:text-5xl text-center text-black">Life Time Calendar</h1>


        <div className=" flex flex-col md:flex-row items-center justify-center gap-4 mt-10 px-4">
            

            <div>

             <h1 className="text-center text-lg md:text-2xl">Enter Age (Number):</h1>
            </div>

            <Textarea className="w-24 md:w-28 rounded-full bg-pink-200 text-center" value={ageNumber} onChange={(e)=> {onAgeChange(e.target.value)}}>

            </Textarea>


            <Button type="submit" className="md:ml-4 mt-3 md:mt-0 bg-amber-600 border-2 border-gray-600" >Display age Info</Button>

        </div>








       </form>
    )

}