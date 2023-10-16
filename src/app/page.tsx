"use client";

import { useState } from "react";
import SplineComponent from "./_components/Spline";
import Link from "next/link";
import { anton, spaceMono } from "@/fonts/fonts";

export default function Home() {
  const [weight, setWeight] = useState(10);
  function handleSetWeight(e: React.ChangeEvent<HTMLInputElement>) {
    setWeight(+e.target.value);
  }

  return (
    <main>
      <SplineComponent weight={weight} />
      <p className="text-white">SPLINE VARIABLES DEMO - 2023</p>
      <p className="text-purple-400 text-[6vw] font-[700] lg:text-[2vw] relative z-50">
        made by{" "}
        <Link
          href="https://www.linkedin.com/in/romain-philippe-milleret/"
          className="underline"
          target="_blank"
        >
          @rvkoon
        </Link>
      </p>
      <Link
        href="https://spline.design/"
        className="underline text-white"
        target="_blank"
      >
        Spline.design
      </Link>
      <p
        className={`opacity-0 xl:opacity-100 fixed top-[24px] right-[24px] text-white ${spaceMono.className} p-[24px] rounded-lg bg-[#101014] border border-purple-400`}
      >
        <span>{"> Spline.design is a tool to create"}</span>
        <br />
        <span>&nbsp;&nbsp;{"3D scenes and animations in the browser."}</span>
        <br />
        <span>{"> It can now be used to create interactive"}</span>
        <br />
        <span>&nbsp;&nbsp;{"experiences with variables."}</span>
        <br />
      </p>
      <div className="inputBox">
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
        className={`fixed z-50 pointer-events-none text-center bottom-[24px] left-[24px] translate-y-[-100%] text-[22vw] leading-[22vw] lg:text-[16vw] lg:leading-[16vw] font-[999] text-white ${anton.className}`}
      >
        SPLINE
      </p>
      <p
        className={`fixed z-0 text-center bottom-[24px] left-[24px] text-[22vw] leading-[22vw] lg:text-[16vw] lg:leading-[16vw] font-[999] text-white ${anton.className}`}
      >
        <span className="opacity-0">SPLINE</span>
        <br />
        VARIABLES
      </p>
    </main>
  );
}
