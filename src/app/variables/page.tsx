"use client";

import { useState } from "react";
import SplineComponent from "./_components/Spline";
import Link from "next/link";
import { anton } from "@/fonts/fonts";
import { useWindowSize } from "usehooks-ts";

export default function Home() {
  const [isLoadingSpline, setIsLoadingSpline] = useState(true);
  const { width } = useWindowSize();
  const isMobile = width < 1024;
  const [weight, setWeight] = useState(10);
  function handleSetWeight(e: React.ChangeEvent<HTMLInputElement>) {
    setWeight(+e.target.value);
  }

  function onLoadedCb() {
    setIsLoadingSpline(false);
  }

  return (
    <main className="p-[24px] relative h-screen">
      <SplineComponent weight={weight} onLoadedCb={onLoadedCb} />
      {isLoadingSpline && (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <p className="text-white">Loading...</p>
        </div>
      )}
      {!isLoadingSpline && (
        <>
          <div className="flex flex-col gap-[24px]">
            <div className="w-full lg:w-fit py-[24px] px-[48px] rounded-[100px_100px_100px_0] bg-[#101014] border-4 border-purple-400 fadeIn relative z-50">
              <p className="text-[3vh] lg:text-[6vh] text-purple-400 font-[600]">
                Spline variables
              </p>
            </div>
            <Link
              href="/"
              className="w-fit flex relative z-50 items-center text-white border-4 border-white py-[12px] px-[24px] rounded-[0_100px_100px_100px] font-[500]"
            >
              Back Home
            </Link>
          </div>

          <div className="inputBox w-full lg:w-fit p-[24px] rounded-full bg-white backdrop-blur-md bg-opacity-5 border border-white border-opacity-10 fadeIn">
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
