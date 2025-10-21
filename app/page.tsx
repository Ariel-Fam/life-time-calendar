"use client"

import EntrySector from "@/components/EntrySector";
import Image from "next/image";
import { useState } from "react";

export default function Home() {


  type Age = {

    age: string

  }



  const [age, setAgeNumber] = useState<string>("")

  const [ageValue, setAgeValue] = useState<number>()



  const handleSubmit = ({age: age}: Age) =>{


    const ageConvert = Number(age)


    const calculation = ageConvert * 52


    setAgeValue(calculation)






    

  }


  return (
    <div className="flex flex-col items-center">


      <div className="flex flex-col items-center w-[90vw] h-1200 bg-gray-500 px-4 py-6 rounded-3xl">

        

        <EntrySector onSubmit={handleSubmit} ageNumber={age} onAgeChange={setAgeNumber} />


        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-7 mb-7">Time Cards</h1>

        
        <div className=" flex flex-col items-center justify-center w-full sm:w-3/4 md:w-2/3 aspect-4/3 h-160 p-10 bg-white rounded-2xl">

        

          <h1 className="mb-10 text-2xl sm:text-3xl">{ageValue ? `Your age in weeks: ${ageValue}`:""}</h1>

          <Image 
          src={"/imageCalendar.png"} 
          height={270}
          width={270} 
          alt="img"
          className="rounded-full drop-shadow-black shadow-2xl  "
          /> 


        </div>



        <div className="w-full sm:w-3/4 md:w-2/3 aspect-4/3 mt-5 bg-white rounded-2xl p-12">

          <div >
            <h1 className="text-2xl mb-3 mt-7">Life Time Stats</h1>
            <ul >
              <h1 className="text-2xl">North America Stats:</h1>
              <li className="mb-10">
                <h3>

                  Average North American life expectancy stats from 2023 in years:
                  80 years
                </h3>
              </li>
              <li >
                Average North American life expectancy in expressed in weeks: 80
                years x 52 weeks in 1 year = 4160 weeks total in a 80 year
                lifetime
              </li>

              <h1 className="text-2xl mb-3 mt-7">Africa Stats:</h1>
              <li className="mb-10">
                Average African life expectancy stats from 2023 in years: 64
                years
              </li>
              <li className="mb-10">
                Average African life expectancy stats in expressed in weeks: 64
                years x 52 weeks in 1 year = 3328 weeks total in a 64 year
                lifetime
              </li>

              <h1 className="text-2xl mb-3 mt-7">Europe Stats:</h1>
              <li className="mb-10">

              
                Average European life expectancy stats from 2023 in years: 81
                years
              </li>
              <li className="mb-10">
                Average European life expectancy stats in expressed in weeks: 81
                years x 52 weeks in 1 year = 4212 weeks total in a 81 year
                lifetime
              </li>

              <h1 className="text-2xl mb-3 mt-7">Asia Stats:</h1>
              <li className="mb-10">
                Average Asian life expectancy stats from 2023 in years: 82 years
              </li>
              <li>
                Average European life expectancy stats in expressed in weeks: 81
                years x 52 weeks in 1 year = 4264 weeks total in a 82 year
                lifetime
              </li>
            </ul>
          </div>


        </div>



        <div className="w-full sm:w-3/4 md:w-2/3 aspect-4/3 mt-5 bg-white rounded-2xl p-12">

          <div >
            <h3 className="text-2xl mb-5">Time Management Techniques:</h3>
            <ol>
              <li className="mb-10">
                <h1 className="text-2xl">Pomodoro Technique:</h1>  Work in focused 25-minute increments,
                followed by a 5-minute break.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Time Blocking:</h1>  Schedule fixed, uninterrupted blocks of time for
                tasks and activities.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Prioritize Using the Eisenhower Matrix:</h1>  Categorize tasks into
                urgent vs. important, and focus on the most critical ones first.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Avoid Multitasking:</h1>  Focus on one task at a time to maintain
                quality and avoid distractions.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Use a Calendar or Planner:</h1>  Write down appointments, deadlines,
                and tasks to stay organized and on track.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Set Realistic Goals:</h1>  Break down large goals into smaller,
                achievable tasks to avoid procrastination.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Avoid Procrastination by Breaking Tasks Down:</h1>  Divide daunting
                tasks into smaller, manageable chunks.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Use a &ldquo;Stop Doing&rdquo; List:</h1>  Identify and eliminate non-essential
                activities that waste time.
              </li>
            </ol>
          </div>


        </div>


        <div className="w-full sm:w-3/4 md:w-2/3 aspect-4/3 mt-5 bg-white rounded-2xl p-12">

          <div>
            <h3 className="text-2xl mb-7">Discipline Techniques:</h3>
            <ol>
              <li className="mb-10">
                <h1 className="text-2xl">Set Clear Goals:</h1>  Establish specific, measurable goals to
                maintain focus and motivation.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Create a Morning Routine:</h1>  Start the day with a consistent
                routine to establish discipline and momentum.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Use Accountability Partners:</h1>  Share goals and progress with
                friends or mentors for support and encouragement.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Track Your Progress:</h1>  Monitor your activities, habits, and
                accomplishments to identify areas for improvement.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Reward Yourself:</h1>  Celebrate milestones and achievements to
                maintain motivation and reinforce positive behaviors.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Develop a &ldquo;Pre-Game&rdquo; Routine:</h1>  Establish consistent habits before
                starting important tasks or activities.
              </li>
              <li className="mb-10">
                <h1 className="text-2xl">Stay Consistent:</h1>  Perform tasks at the same time every day to
                build momentum and create healthy habits.
              </li>
              <li>
                <h1 className="text-2xl">Use Physical Activity to Boost Discipline:</h1>  Incorporate physical
                exercise into your daily routine to improve focus and
                self-control.
              </li>
            </ol>
          </div>
        </div>



        <Image 
          src={"/space_pointer.png"} 
          height={270}
          width={270} 
          alt="img"
          className="rounded-full shadow-2xl mb-10 mt-20 "
          /> 


        </div>



        






        
      </div>


    

  );
}
