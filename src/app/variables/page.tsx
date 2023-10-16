"use client";

import { useState } from "react";
import SplineComponent from "./_components/Spline";
import Link from "next/link";
import { anton } from "@/fonts/fonts";

export default function Home() {
  const [isLoadingSpline, setIsLoadingSpline] = useState(true);
  const [weight, setWeight] = useState(10);
  function handleSetWeight(e: React.ChangeEvent<HTMLInputElement>) {
    setWeight(+e.target.value);
  }

  function onLoadedCb() {
    setIsLoadingSpline(false);
  }

  return (
    <main className="p-[24px]">
      <SplineComponent weight={weight} onLoadedCb={onLoadedCb} />
      {isLoadingSpline && (
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="text-white">Loading...</p>
        </div>
      )}
      {!isLoadingSpline && (
        <>
          <div className="p-[24px] rounded-lg bg-[#101014] border border-purple-400 w-fit fadeIn relative z-50">
            <p className="text-[4vh] text-purple-400 font-[600]">
              Spline variables demo
            </p>
            <Link href="/" className="underline text-white">
              Back Home
            </Link>{" "}
          </div>

          <div className="inputBox p-[24px] rounded-lg bg-white backdrop-blur-md bg-opacity-5 border border-white border-opacity-10 w-fit fadeIn">
            <p className="text-white">Play with variable torus weight</p>
            <input
              type="range"
              min="10"
              max="50"
              step="1"
              value={weight}
              onChange={handleSetWeight}
              className="relative z-10 w-[200px] h-3 bg-gray-200 rounded-full appearance-none cursor-pointer dark:bg-gray-700 accent-purple-400"
            />
          </div>
          <p
            className={`fixed z-50 pointer-events-none text-center bottom-[24px] left-[24px] translate-y-[-100%] text-[22vw] leading-[22vw] lg:text-[16vw] lg:leading-[16vw] font-[999] text-white ${anton.className} transitionIn`}
          >
            SPLINE
          </p>
          <p
            className={`fixed z-0 text-center bottom-[24px] left-[24px] text-[22vw] leading-[22vw] lg:text-[16vw] lg:leading-[16vw] font-[999] text-white ${anton.className} transitionIn`}
          >
            <span className="opacity-0">SPLINE</span>
            <br />
            VARIABLES
          </p>
        </>
      )}
    </main>
  );
}
